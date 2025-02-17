<script setup>
import homenatge_a_chantal_maillard from '../assets/obra/homenatge_a_chantal_maillard.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'homenatge_a_chantal_maillard',
      title: 'Homenatge a Chantal Maillard'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="homenatge_a_chantal_maillard" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
