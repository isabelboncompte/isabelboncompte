<script setup>
import dones_avançant from '../assets/obra/dones_avançant.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'dones_avançant',
      title: 'Dones avançant'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="dones_avançant" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
