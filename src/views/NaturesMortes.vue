<script setup>
import natures_mortes from '../assets/obra/natures_mortes.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'natures_mortes',
      title: 'Natures mortes'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="natures_mortes" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
