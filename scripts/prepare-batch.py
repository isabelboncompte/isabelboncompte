"""Prepare a batch of new piece photos for the shop catalog.

Goes over a folder of photos and:
  1. finds exact duplicate files (same bytes) so they aren't cataloged twice;
  2. groups photos that likely show the SAME object (perceptual hash +
     color signature) so multi-view pieces share one catalog entry;
  3. writes a draft manifest (manifest.json) with one entry per object,
     ready to rename and merge into src/assets/obra/ceramica.json.

The grouping is a heuristic: same piece shot from very different angles
may land in separate groups, and two pieces with the same glaze may land
together — review the manifest before using it.

Usage:  .venv/bin/python scripts/prepare-batch.py <photoDir>
        (needs Pillow: .venv/bin/pip install pillow)
"""
import hashlib
import json
import sys
from pathlib import Path
from PIL import Image, ImageOps


def dhash(im, size=8):
    g = ImageOps.exif_transpose(im).convert('L').resize((size + 1, size))
    bits = 0
    for y in range(size):
        for x in range(size):
            bits = (bits << 1) | (g.getpixel((x, y)) > g.getpixel((x + 1, y)))
    return bits


def hamming(a, b):
    return bin(a ^ b).count('1')


def color_sig(im):
    """Mean color of the central region (the piece, not the backdrop)."""
    rgb = ImageOps.exif_transpose(im).convert('RGB')
    w, h = rgb.size
    box = rgb.crop((w // 4, h // 4, 3 * w // 4, 3 * h // 4)).resize((16, 16))
    px = list(box.getdata())
    n = len(px)
    return tuple(sum(c[i] for c in px) / n for i in range(3))


def color_dist(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** 0.5


def main(folder):
    folder = Path(folder)
    files = sorted(p for p in folder.iterdir() if p.suffix.lower() in ('.jpg', '.jpeg', '.png'))

    # 1) exact duplicates
    by_hash = {}
    for f in files:
        h = hashlib.md5(f.read_bytes()).hexdigest()
        by_hash.setdefault(h, []).append(f)
    uniques, dups = [], []
    for group in by_hash.values():
        uniques.append(group[0])
        dups.extend(group[1:])
    if dups:
        print('Duplicats exactes (es poden esborrar):')
        for d in dups:
            print(f'  {d.name}')

    # 2) same-object candidates
    feats = []
    for f in uniques:
        with Image.open(f) as im:
            feats.append((f, dhash(im), color_sig(im)))

    groups = []
    for f, dh, cs in feats:
        placed = False
        for g in groups:
            _, gdh, gcs = g[0]
            if hamming(dh, gdh) <= 14 and color_dist(cs, gcs) < 40:
                g.append((f, dh, cs))
                placed = True
                break
        if not placed:
            groups.append([(f, dh, cs)])

    # 3) draft manifest
    manifest = []
    print(f'\n{len(uniques)} fotos úniques -> {len(groups)} objectes candidats:')
    for i, g in enumerate(groups, 1):
        names = [f.name for f, _, _ in g]
        tag = ' + '.join(names)
        print(f'  Objecte {i}: {tag}')
        manifest.append({
            'name': f'PENDENT DE NOM {i}',
            'category': 'PENDENT',
            'images': names,
            'material': None,
            'esmalt': None,
            'price': None,
            'sold': False,
            'size': None,
        })

    out = folder / 'manifest.json'
    out.write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
    print(f'\nEsborrany escrit a {out} — revisa els grups i posa noms abans d\'usar-lo.')


if __name__ == '__main__':
    main(sys.argv[1])
