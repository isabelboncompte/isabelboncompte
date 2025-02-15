<script setup>
import postals from '../assets/obra/postals.json'
import Gallery from '../components/Gallery.vue'
</script>

<template>
  <div>
    <Gallery :images="postals" />
  </div>
</template>

<style scoped>

</style>
