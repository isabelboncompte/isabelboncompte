# isabelboncompte.com

Web d'Isabel Boncompte — pintura i ceràmica. Vue 3 + Vite, desplegat a GitHub Pages amb domini propi.

## Comandes

```sh
npm install        # una vegada
npm run dev        # desenvolupament amb recàrrega automàtica (http://localhost:5173)
npm run build      # build de producció a dist/ (optimitza imatges, purga CSS, copia 404.html)
npm run deploy     # build + publica dist/ a la branca gh-pages (el web en viu)
```

## Com actualitzar el contingut

### Afegir o editar peces de ceràmica (botiga, `/ceramica`)

1. Fotografia la peça i processa-la amb el pipeline (vegeu més avall).
2. Desa les fotos processades a `src/assets/obra/Botiga/` (p. ex. `Bol V.jpg`, `Bol V A.jpg` per a vistes addicionals).
3. Afegeix una entrada a `src/assets/obra/ceramica.json`:

```json
{
  "name": "Bol V",
  "category": "Bols",
  "images": ["Bol V.jpg", "Bol V A.jpg"],
  "material": "Gres",
  "esmalt": "Tenmoku",
  "price": 35,
  "sold": false,
  "size": "ø 14 × 7 cm"
}
```

- `price: null` mostra «Preu a la botiga».
- `sold: true` mostra «Venuda».
- Categories existents: Bols, Gerros i càntirs, Plats i plàteres, Pots i gots. Una categoria nova es crea sola si li poses un nom nou.

### Afegir una sèrie nova d'obra (`/obra/...`)

1. Posa les imatges a `src/assets/obra/<NomSèrie>/`.
2. Crea `src/assets/obra/<nom_serie>.json` amb el mateix format que els altres (image/name/year/technique/size).
3. Afegeix una línia a `src/series.js` — això crea la ruta i l'entrada al menú automàticament.

### Processar fotos de ceràmica (fons uniforme)

```sh
python3 -m venv .venv && .venv/bin/pip install rembg onnxruntime pillow   # una vegada
.venv/bin/python scripts/standardize-background.py <carpetaOrigen> <carpetaDestí>
```

Retalla cada peça (rembg/U2Net) i la posa sobre el fons d'estudi amb ombra de contacte.

### Normalitzar fotos d'obra (balanç de blancs, mida)

```sh
node scripts/normalize-images.mjs <carpetaOrigen> <carpetaDestí>
```

## Arquitectura

- `src/series.js` — registre de sèries: ruta, JSON i menú en un sol lloc.
- `src/views/ObraSerie.vue` — una única vista per a totes les galeries d'obra.
- `src/views/Ceramica.vue` — la botiga (graella per categories + visor).
- Les imatges es redimensionen a WebP en temps de build (vite-imagetools); no cal optimitzar-les a mà.
- `scripts/purge-css.mjs` — treu el CSS de Buefy/Bulma que no es fa servir (build).
- El build copia `index.html` a `404.html` perquè GitHub Pages serveixi l'SPA a totes les rutes.
