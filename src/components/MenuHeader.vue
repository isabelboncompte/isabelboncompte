<template>
    <header>
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Isabel Boncompte
            </b-navbar-item>
        </template>
  
        <template #end>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/ceramica' }">
            Ceràmica
          </b-navbar-item>
          <b-navbar-item tag="div">
            <b-navbar-dropdown label="Obra" right=false dropdownClass="custom-submenu">
              <b-navbar-item
                v-for="(item, index) in menu"
                :key="index"
                :value="item.to"
                @click="$router.push(item.to)"
              >
              {{ item.label }}
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/biografia' }">
            Biografia
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
  </template>
  
  <script>
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink },
  data() {
    return {
      menu: [
        { label: 'Picorandan', to: '/obra/picorandan' },
        { label: 'Natures Mortes', to: '/obra/naturesmortes' },
        { label: 'Retrats i Figura', to: '/obra/retratsifigura' },
        { label: 'Murs i Camins', to: '/obra/mursicamins' },
        { label: 'Dones Avançant', to: '/obra/donesavançant' },
        { label: 'Botànica', to: '/obra/botanica' },
        { label: 'Ceràmica', to: '/obra/ceramica' },
        { label: 'Espriu', to: '/obra/espriu' },
        { label: 'Apunts de Retrat i Figura', to: '/obra/apuntsfigura' },
        { label: 'Apunts Paisatge', to: '/obra/apuntspaisatge' },
        { label: 'Dibuixos', to: '/obra/dibuix' },
        { label: 'Postals', to: '/obra/postals' },
        { label: 'Miscel·lània', to: '/obra/miscellania' },
        // { label: 'Homenatge a Chantal Maillard', to: '/obra/homenatgeachantalmaillard' },
        // { label: 'Els llibres i la rosa', to: '/obra/elsllibresilarosa' },
        // { label: 'Gravat', to: '/obra/gravat' },

      ],
    }
  },
}
  </script>
  
  <style>
/* Buefy renders the dropdown caret and active states with its $primary
   (purple); force the site's ochre instead. Unscoped on purpose: the
   navbar dropdown is rendered outside this component's scope ids. */
.navbar-item .icon,
.navbar-link:not(.is-arrowless)::after,
.navbar-dropdown .navbar-item.is-active {
  color: #965c00 !important;
  border-color: #965c00 !important;
}

.navbar-burger span {
  color: #965c00;
}
  </style>