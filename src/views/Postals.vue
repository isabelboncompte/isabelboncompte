<script setup>
import postals from '../assets/obra/postals.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'postals',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="postals" :name="name" />
  </div>
</template>

<style scoped>

</style>
