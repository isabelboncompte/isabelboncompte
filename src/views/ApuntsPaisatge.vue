<script setup>
import apunts_paisatge from '../assets/obra/apunts_paisatge.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'apunts_paisatge',
      title: 'Apunts Paisatge'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="apunts_paisatge" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
