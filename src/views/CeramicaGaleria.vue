<script setup>
import ceramica_galeria from '../assets/obra/ceramica_galeria.json'
import Gallery from '../components/Gallery.vue'

</script>

<script>

export default {
  data() {
    return {
      name: 'ceramica_galeria',
      title: 'Ceràmica'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="ceramica_galeria" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
