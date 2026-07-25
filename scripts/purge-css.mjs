// Postbuild: strip unused Bulma/Buefy rules from the built CSS.
// Safelist covers classes Buefy toggles at runtime (navbar burger/dropdown,
// skeleton) and Bulma utilities used in templates.
import { PurgeCSS } from 'purgecss'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'

const cssFiles = readdirSync('dist/assets').filter(f => f.endsWith('.css')).map(f => `dist/assets/${f}`)
const results = await new PurgeCSS().purge({
  content: ['dist/**/*.html', 'dist/assets/*.js'],
  css: cssFiles,
  safelist: {
    standard: [/^navbar/, /^skeleton/, /^b-skeleton/, /^is-/, /^has-/, /^title/, /^dropdown/, /^icon/, /^burger/, /^container/, /^column/, /^row/, 'html', 'body'],
    deep: [/navbar/, /dropdown/, /skeleton/],
  },
})
for (const r of results) {
  const before = readFileSync(r.file, 'utf8').length
  writeFileSync(r.file, r.css)
  console.log(`${r.file}: ${(before / 1024).toFixed(0)}KB -> ${(r.css.length / 1024).toFixed(0)}KB`)
}
