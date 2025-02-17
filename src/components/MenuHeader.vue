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
            <b-navbar-dropdown label="Obra" right=false>
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
        { label: 'Retrats', to: '/obra/retrats' },
        { label: 'Postals', to: '/obra/postals' },
        { label: 'Picorandan', to: '/obra/picorandan' },
        { label: 'Natures Mortes', to: '/obra/naturesmortes' },
        { label: 'Murs i camins', to: '/obra/mursicamins' },
        { label: 'Miscel·lània', to: '/obra/miscellania' },
        { label: 'Homenatge a Chantal Maillard', to: '/obra/homenatgeachantalmaillard' },
        { label: 'Gravat', to: '/obra/gravat' },
        { label: 'Espriu', to: '/obra/espriu' },
        { label: 'Els llibres i la rosa', to: '/obra/elsllibresilarosa' },
        { label: 'Dones Avançant', to: '/obra/donesavançant' },
        { label: 'Dibuix', to: '/obra/dibuix' },
        { label: 'Botànica', to: '/obra/botanica' },
        { label: 'Apunts Figura', to: '/obra/apuntsfigura' },
        { label: 'Apunts Paisatge', to: '/obra/apuntspaisatge' },
      ],
    }
  },
}
  </script>
  
  <style scoped>
  
  </style>