<script setup>
import dones_avançant from '../assets/obra/dones_avançant.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'dones_avançant',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="dones_avançant" :name="name" />
  </div>
</template>

<style scoped>

</style>
