// Registry of the artwork series shown under /obra/:slug.
// To add a new series: create the JSON in src/assets/obra/, add a line here,
// and (if it should appear in the menu) set inMenu: true.
export const series = {
  picorandan: { json: 'picorandan', title: 'Picorandan', inMenu: true },
  naturesmortes: { json: 'natures_mortes', title: 'Natures Mortes', inMenu: true },
  retratsifigura: { json: 'retratsifigura', title: 'Retrats i Figura', inMenu: true },
  mursicamins: { json: 'murs_i_camins', title: 'Murs i Camins', inMenu: true },
  donesavançant: { json: 'dones_avançant', title: 'Dones Avançant', inMenu: true },
  botanica: { json: 'botanica', title: 'Botànica', inMenu: true },
  ceramica: { json: 'ceramica_galeria', title: 'Ceràmica', inMenu: true },
  espriu: { json: 'espriu', title: 'Espriu', inMenu: true },
  apuntsfigura: { json: 'apunts_figura', title: 'Apunts de Retrat i Figura', inMenu: true },
  apuntspaisatge: { json: 'apunts_paisatge', title: 'Apunts Paisatge', inMenu: true },
  dibuix: { json: 'dibuix', title: 'Dibuixos', inMenu: true },
  postals: { json: 'postals', title: 'Postals', inMenu: true },
  miscellania: { json: 'miscellania', title: 'Miscel·lània', inMenu: true },
  homenatgeachantalmaillard: { json: 'homenatge_a_chantal_maillard', title: 'Homenatge a Chantal Maillard', inMenu: false },
  elsllibresilarosa: { json: 'els_llibres_i_la_rosa', title: 'Els llibres i la rosa', inMenu: false },
  gravat: { json: 'gravat', title: 'Gravat', inMenu: false },
}

export const menuItems = Object.entries(series)
  .filter(([, s]) => s.inMenu)
  .map(([slug, s]) => ({ label: s.title, to: `/obra/${slug}` }))
