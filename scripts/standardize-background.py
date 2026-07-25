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

def process(src, dst):
    im = ImageOps.exif_transpose(Image.open(src))
    cut = remove(im, session=session)
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

    # Elliptical contact shadow under the base of the piece
    shadow = Image.new('L', (side, side), 0)
    d = ImageDraw.Draw(shadow)
    sw = int(w * 0.82)
    sh = max(int(side * 0.045), 8)
    cx, base = side // 2, oy + h
    d.ellipse([cx - sw // 2, base - sh, cx + sw // 2, base + sh], fill=110)
    shadow = shadow.filter(ImageFilter.GaussianBlur(side // 45))
    dark = Image.new('RGB', (side, side), (96, 86, 74))
    canvas = Image.composite(dark, canvas, shadow.point(lambda v: int(v * 0.55)))

    canvas.paste(cut, (ox, oy), cut)
    canvas.thumbnail((2000, 2000))
    canvas.save(dst, 'JPEG', quality=92)
    print(f"ok {src.name}")

indir, outdir = Path(sys.argv[1]), Path(sys.argv[2])
outdir.mkdir(parents=True, exist_ok=True)
for f in sorted(indir.glob('*.jpg')):
    process(f, outdir / f.name)
