<script setup>
import apunts_figura from './assets/obra/apunts_figura.json'
import apunts_paisatge from './assets/obra/apunts_paisatge.json'
import botanica from './assets/obra/botanica.json'
import dibuix from './assets/obra/dibuix.json'
import dones_avançant from './assets/obra/dones_avançant.json'
import els_llibres_i_la_rosa from './assets/obra/els_llibres_i_la_rosa.json'
import espriu from './assets/obra/espriu.json'
import gravat from './assets/obra/gravat.json'
import homenatge_a_chantal_maillard from './assets/obra/homenatge_a_chantal_maillard.json'
import miscellania from './assets/obra/miscellania.json'
import murs_i_camins from './assets/obra/murs_i_camins.json'

import Gallery from './components/Gallery.vue'
</script>

<template>
  <div>
    <Gallery :images="murs_i_camins" />
  </div>
</template>

<style scoped>

</style>
