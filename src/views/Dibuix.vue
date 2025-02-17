<script setup>
import dibuix from '../assets/obra/dibuix.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'dibuix',
      title: 'Dibuix'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="dibuix" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
