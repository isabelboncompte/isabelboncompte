"""Standardize ceramics photos onto one uniform background.

Segments the piece with rembg (U2Net) and composites it centered on a
warm off-white square canvas (matching the site's card color #f4f1ec)
with a soft drop shadow.

Setup:  python3 -m venv .venv && .venv/bin/pip install rembg onnxruntime pillow
Usage:  .venv/bin/python scripts/standardize-background.py <inDir> <outDir>
"""
import sys
from pathlib import Path
from rembg import remove, new_session
from PIL import Image, ImageDraw, ImageFilter, ImageOps

session = new_session("u2net")
BG_TOP = (247, 245, 240)     # wall
BG_BOTTOM = (228, 223, 213)  # surface the piece sits on

def studio_canvas(side):
    """Vertical gradient: light wall fading into a slightly darker floor."""
    grad = Image.new('L', (1, side))
    for y in range(side):
        t = y / side
        # ease the transition into the lower third, like an infinity cove
        k = min(1.0, max(0.0, (t - 0.45) / 0.55)) ** 1.4
        grad.putpixel((0, y), int(255 * k))
    grad = grad.resize((side, side))
    top = Image.new('RGB', (side, side), BG_TOP)
    bottom = Image.new('RGB', (side, side), BG_BOTTOM)
    return Image.composite(bottom, top, grad)

def quality_warnings(src, im, cut, bbox):
    warns = []
    if min(im.size) < 1200:
        warns.append(f"low-res source ({im.size[0]}x{im.size[1]})")
    if bbox and (bbox[0] <= 2 or bbox[1] <= 2 or bbox[2] >= cut.size[0] - 2 or bbox[3] >= cut.size[1] - 2):
        warns.append("subject touches the frame edge (clipped?)")
    return warns


def process(src, dst):
    im = ImageOps.exif_transpose(Image.open(src))
    cut = remove(
        im,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=10,
    )
    # Erode the alpha 1px and soften to kill halo outlines from the matte.
    a = cut.getchannel('A').filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.7))
    cut.putalpha(a)
    bbox = cut.getchannel('A').getbbox()
    if not bbox:
        print(f"SKIP {src.name}: nothing segmented")
        return
    cut = cut.crop(bbox)
    w, h = cut.size
    side = int(max(w, h) * 1.3)
    canvas = studio_canvas(side)

    # Piece sits on the "floor line" (slightly below center), not floating
    ox = (side - w) // 2
    oy = int(side * 0.62 - h / 2)
    oy = max(int(side * 0.08), min(oy, side - h - int(side * 0.06)))

    # Measure the piece's real footprint: opaque pixels in the bottom 4%
    # of the cutout. A vase yields its base width; a top-down plate yields
    # its narrow lower rim, avoiding the "standing coin" shadow effect.
    alpha = cut.getchannel('A')
    band_h = max(1, int(h * 0.04))
    band = alpha.crop((0, h - band_h, w, h))
    bband = band.point(lambda v: 255 if v > 40 else 0)
    fb = bband.getbbox()
    if fb:
        foot_w = fb[2] - fb[0]
        foot_cx = ox + (fb[0] + fb[2]) // 2
    else:
        foot_w = int(w * 0.6)
        foot_cx = ox + w // 2
    foot_w = max(foot_w, int(w * 0.25))

    # Elliptical contact shadow sized to the footprint: a soft spread plus
    # a denser core right at the contact point so the piece reads grounded.
    shadow = Image.new('L', (side, side), 0)
    d = ImageDraw.Draw(shadow)
    base = oy + h
    sw = int(foot_w * 1.25)
    sh = max(int(sw * 0.16), 8)
    d.ellipse([foot_cx - sw // 2, base - sh, foot_cx + sw // 2, base + sh], fill=170)
    core_w = int(foot_w * 0.9)
    core_h = max(int(core_w * 0.10), 5)
    d.ellipse([foot_cx - core_w // 2, base - core_h, foot_cx + core_w // 2, base + core_h], fill=230)
    shadow = shadow.filter(ImageFilter.GaussianBlur(max(side // 80, 4)))
    dark = Image.new('RGB', (side, side), (96, 86, 74))
    canvas = Image.composite(dark, canvas, shadow.point(lambda v: int(v * 0.55)))

    canvas.paste(cut, (ox, oy), cut)
    canvas.thumbnail((2000, 2000))
    canvas.save(dst, 'JPEG', quality=92)
    warns = quality_warnings(src, im, cut, bbox)
    flag = ('  [REVISA: ' + '; '.join(warns) + ']') if warns else ''
    print(f"ok {src.name}{flag}")

indir, outdir = Path(sys.argv[1]), Path(sys.argv[2])
outdir.mkdir(parents=True, exist_ok=True)
for f in sorted(indir.glob('*.jpg')):
    process(f, outdir / f.name)
