<script setup>
import botanica from '../assets/obra/botanica.json'
import Gallery from '../components/Gallery.vue'

</script>

<script>

export default {
  data() {
    return {
      name: 'botanica',
      title: 'Botànica'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="botanica" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
