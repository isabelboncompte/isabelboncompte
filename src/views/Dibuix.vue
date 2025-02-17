<script setup>
import dibuix from '../assets/obra/dibuix.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'dibuix',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="dibuix" :name="name" />
  </div>
</template>

<style scoped>

</style>
