<script setup>
import apunts_figura from './assets/obra/apunts_figura.json'
import apunts_paisatge from './assets/obra/apunts_paisatge.json'
import botanica from './assets/obra/botanica.json'

import Gallery from './components/Gallery.vue'
</script>

<template>
  <div>
    <Gallery :images="botanica" />
  </div>
</template>

<style scoped>

</style>
