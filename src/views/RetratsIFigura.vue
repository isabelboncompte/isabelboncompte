<script setup>
import retrats from '../assets/obra/retratsifigura.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'retratsifigura',
      title: 'Retrats i Figura'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="retrats" :name="name" :title="title" />
  </div>
</template>

<style scoped>

</style>
