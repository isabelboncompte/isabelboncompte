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
          <b-navbar-item tag="router-link" :to="{ path: '/bibliografia' }">
            Bibliografia
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
  
  <style scoped>
.custom-submenu .dropdown-trigger .icon {
  color: grey !important;
}

.custom-submenu .dropdown-trigger .icon svg {
  fill: grey !important;
}
  </style>