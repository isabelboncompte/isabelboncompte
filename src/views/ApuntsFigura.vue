<script setup>
import apunts_figura from '../assets/obra/apunts_figura.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'apunts_figura',
      title: 'Apunts de retrat i figura'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="apunts_figura" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
