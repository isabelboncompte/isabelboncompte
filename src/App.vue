<script setup>
import apunts_figura from '../public/obra/apunts_figura.json'
import Gallery from './components/Gallery.vue'
</script>

<template>
  <div>
    <Gallery :images="apunts_figura" />
  </div>
</template>

<style scoped>

</style>
