// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import RetratsIFigura from './views/RetratsIFigura.vue'
import Postals from './views/Postals.vue'
import Picorandan from './views/Picorandan.vue'
import NaturesMortes from './views/NaturesMortes.vue'
import Miscellania from './views/Miscellania.vue'
import MursICamins from './views/MursICamins.vue'
import HomenatgeAChantalMaillard from './views/HomenatgeAChantalMaillard.vue'
import Gravat from './views/Gravat.vue'
import Espriu from './views/Espriu.vue'
import ElsLlibresIlaRosa from './views/ElsLlibresILaRosa.vue'
import DonesAvançant from './views/DonesAvançant.vue'
import Dibuix from './views/Dibuix.vue'
import Ceramica from './views/Ceramica.vue'
import Botanica from './views/Botanica.vue'
import ApuntsPaisatge from './views/ApuntsPaisatge.vue'
import ApuntsFigura from './views/ApuntsFigura.vue'
import ImageViewer from './components/ImageViewer.vue'
import Bibliografia from './views/Biografia.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/obra/retratsifigura',
    name: 'Retrats i Figura',
    component: RetratsIFigura
  },
  {
    path: '/obra/postals',
    name: 'Postals',
    component: Postals
  },
  {
    path: '/obra/picorandan',
    name: 'Picorandan',
    component: Picorandan
  },
  {
    path: '/obra/naturesmortes',
    name: 'Natures Mortes',
    component: NaturesMortes
  },
  {
    path: '/obra/mursicamins',
    name: 'Murs i Camins',
    component: MursICamins
  },
  {
    path: '/obra/miscellania',
    name: 'Miscel·lania',
    component: Miscellania
  },
  {
    path: '/obra/homenatgeachantalmaillard',
    name: 'Homenatge a Chantal Maillard',
    component: HomenatgeAChantalMaillard
  },
  {
    path: '/obra/gravat',
    name: 'Gravat',
    component: Gravat
  },
  {
    path: '/obra/espriu',
    name: 'Espriu',
    component: Espriu
  },
  {
    path: '/obra/elsllibresilarosa',
    name: 'Els llibres i la rosa',
    component: ElsLlibresIlaRosa
  },
  {
    path: '/obra/donesavançant',
    name: 'Dones Avançant',
    component: DonesAvançant
  },
  {
    path: '/obra/dibuix',
    name: 'Dibuix',
    component: Dibuix
  },
  {
    path: '/obra/ceramica',
    name: 'Ceràmica',
    component: Ceramica
  },
  {
    path: '/obra/botanica',
    name: 'Botànica',
    component: Botanica
  },
  {
    path: '/obra/apuntsfigura',
    name: 'Apunts figura',
    component: ApuntsFigura
  },
  {
    path: '/obra/apuntspaisatge',
    name: 'Apunts paisatge',
    component: ApuntsPaisatge
  },
  {
    path: '/image/:index',
    name: 'image-viewer',
    component: ImageViewer,
    props: true,
  },
  {
    path: '/biografia',
    name: 'biografia',
    component: Bibliografia,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router