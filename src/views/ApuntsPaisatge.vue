<script setup>
import apunts_paisatge from '../assets/obra/apunts_paisatge.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'apunts_paisatge',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="apunts_paisatge" :name="name" />
  </div>
</template>

<style scoped>

</style>
