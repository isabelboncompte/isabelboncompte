<script setup>
import gravat from '../assets/obra/gravat.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'gravat',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="gravat" :name="name" />
  </div>
</template>

<style scoped>

</style>
