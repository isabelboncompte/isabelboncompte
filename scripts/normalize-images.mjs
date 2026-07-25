// Normalize ceramics photos for a consistent shop look:
//  1. White-balance from the border pixels (assumes a neutral backdrop),
//     so warm/cool casts across photo sessions converge to the same tone.
//  2. Gentle histogram stretch for consistent exposure.
//  3. Mild saturation lift so glazes read true after neutralizing.
// Usage: node scripts/normalize-images.mjs <inDir> <outDir>
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, extname } from 'node:path'

const [inDir, outDir] = process.argv.slice(2)
mkdirSync(outDir, { recursive: true })

async function borderGains(img, meta) {
  // Sample a 6%-thick frame around the edges; the backdrop dominates there.
  const { data, info } = await img
    .clone()
    .flatten({ background: '#ffffff' })
    .resize(200, 200, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true })
  const t = 12 // 6% of 200
  let r = 0, g = 0, b = 0, n = 0
  for (let y = 0; y < 200; y++) {
    for (let x = 0; x < 200; x++) {
      if (x >= t && x < 200 - t && y >= t && y < 200 - t) continue
      const i = (y * 200 + x) * info.channels
      r += data[i]; g += data[i + 1]; b += data[i + 2]; n++
    }
  }
  r /= n; g /= n; b /= n
  const grey = (r + g + b) / 3
  // Clamp gains: photos whose borders aren't backdrop shouldn't get wrecked.
  const clamp = v => Math.max(0.85, Math.min(1.18, v))
  return [clamp(grey / r), clamp(grey / g), clamp(grey / b)]
}

for (const f of readdirSync(inDir)) {
  if (!['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())) continue
  const src = sharp(join(inDir, f)).rotate() // apply EXIF orientation
  const meta = await src.metadata()
  const [gr, gg, gb] = await borderGains(src, meta)
  await src
    .flatten({ background: '#ffffff' }) // some files are PNGs with transparency
    .linear([gr, gg, gb], [0, 0, 0])
    .normalise({ lower: 0.5, upper: 99.5 })
    .modulate({ saturation: 1.06 })
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(join(outDir, f.replace(/\.(png|jpeg)$/i, '.jpg')))
  console.log(`${f}  wb=[${gr.toFixed(2)},${gg.toFixed(2)},${gb.toFixed(2)}]`)
}
