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
from PIL import Image, ImageFilter, ImageOps

session = new_session("u2net")
BG = (243, 241, 236)

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
    canvas = Image.new('RGB', (side, side), BG)
    a = cut.getchannel('A').point(lambda v: int(v * 0.30))
    shadow = Image.new('RGBA', cut.size, (60, 50, 40, 0))
    shadow.putalpha(a)
    shadow = shadow.filter(ImageFilter.GaussianBlur(side // 60))
    ox, oy = (side - w) // 2, (side - h) // 2
    canvas.paste(shadow, (ox, oy + side // 90), shadow)
    canvas.paste(cut, (ox, oy), cut)
    canvas.thumbnail((2000, 2000))
    canvas.save(dst, 'JPEG', quality=92)
    print(f"ok {src.name}")

indir, outdir = Path(sys.argv[1]), Path(sys.argv[2])
outdir.mkdir(parents=True, exist_ok=True)
for f in sorted(indir.glob('*.jpg')):
    process(f, outdir / f.name)
