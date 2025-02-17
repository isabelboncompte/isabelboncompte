<script setup>
import murs_i_camins from '../assets/obra/murs_i_camins.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'murs_i_camins',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="murs_i_camins" :name="name" />
  </div>
</template>

<style scoped>

</style>
