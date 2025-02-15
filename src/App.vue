<script>
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
import natures_mortes from './assets/obra/natures_mortes.json'
import picorandan from './assets/obra/picorandan.json'
import postals from './assets/obra/postals.json'
import retrats from './assets/obra/retrats.json'

import Gallery from './components/Gallery.vue'
import { RouterView } from 'vue-router'
import MenuHeader from './components/MenuHeader.vue'

export default {
  components: { MenuHeader, RouterView }
}
</script>

<template>
  <div>
    <MenuHeader />
    <RouterView />

    <!--Gallery :images="retrats" /-->
  </div>
</template>

<style scoped>

</style>
