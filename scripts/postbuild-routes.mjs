// Postbuild: give every static route a real HTML file so GitHub Pages
// serves it with HTTP 200 (instead of the 404.html fallback, whose 404
// status keeps search engines from indexing anything but the homepage).
// Each copy gets its own <title>, description, og tags and canonical.
// Also emits sitemap.xml. Route list derives from src/series.js.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { series } from '../src/series.js'

const BASE = 'https://isabelboncompte.com'
const html = readFileSync('dist/index.html', 'utf8')

const routes = [
  { path: '/', title: 'Isabel Boncompte — Pintura i Ceràmica', desc: "Isabel Boncompte — pintura (retrat i natura) i ceràmica feta al torn. Peces úniques disponibles a la botiga." },
  { path: '/ceramica', title: 'Botiga de ceràmica — Isabel Boncompte', desc: "Peces úniques de ceràmica fetes al torn: bols, gerros, plats i pots. Es venen exclusivament a la botiga." },
  { path: '/biografia', title: 'Biografia — Isabel Boncompte', desc: "Trajectòria, exposicions, publicacions i premis d'Isabel Boncompte." },
  ...Object.entries(series).map(([slug, s]) => ({
    path: `/obra/${slug}`,
    title: `${s.title} — Isabel Boncompte`,
    desc: `${s.title}: obra d'Isabel Boncompte.`,
  })),
]

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

for (const r of routes) {
  const url = BASE + (r.path === '/' ? '/' : r.path)
  let page = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  if (!page.includes('rel="canonical"')) {
    page = page.replace('</head>', `    <link rel="canonical" href="${url}">\n  </head>`)
  }
  if (r.path === '/') {
    writeFileSync('dist/index.html', page)
  } else {
    const dir = `dist${r.path}`
    mkdirSync(dir, { recursive: true })
    writeFileSync(`${dir}/index.html`, page)
  }
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url><loc>${BASE}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync('dist/sitemap.xml', sitemap)
console.log(`postbuild-routes: ${routes.length} routes, sitemap.xml written`)
