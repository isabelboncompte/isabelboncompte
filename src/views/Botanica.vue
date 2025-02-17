<script setup>
import botanica from '../assets/obra/botanica.json'
import Gallery from '../components/Gallery.vue'

</script>

<script>

export default {
  data() {
    return {
      name: 'botanica',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="botanica" :name="name"/>
  </div>
</template>

<style scoped>

</style>
