<script setup>
import murs_i_camins from '../assets/obra/murs_i_camins.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'murs_i_camins',
      title: 'Murs i Camins'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="murs_i_camins" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
