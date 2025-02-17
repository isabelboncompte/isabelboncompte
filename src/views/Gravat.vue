<script setup>
import gravat from '../assets/obra/gravat.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'gravat',
      title: 'Gravat'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="gravat" :name="name" :title="title" />
  </div>
</template>

<style scoped>

</style>
