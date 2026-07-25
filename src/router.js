// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import { series } from './series.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ceramica',
    name: 'Ceràmica',
    component: () => import('./views/Ceramica.vue')
  },
  {
    path: '/obra/:slug',
    name: 'obra-serie',
    component: () => import('./views/ObraSerie.vue'),
    beforeEnter: (to) => {
      if (!series[to.params.slug]) return { path: '/' }
    }
  },
  {
    path: '/image/:index',
    name: 'image-viewer',
    component: () => import('./components/ImageViewer.vue'),
    props: true,
  },
  {
    path: '/biografia',
    name: 'biografia',
    component: () => import('./views/Biografia.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Old links used hash routing (isabelboncompte.com/#/obra/...). Redirect
// them to the equivalent clean URL so bookmarks and shared links keep working.
router.beforeEach((to) => {
  if (to.path === '/' && to.hash.startsWith('#/')) {
    return { path: to.hash.slice(1), replace: true }
  }
})

export default router
