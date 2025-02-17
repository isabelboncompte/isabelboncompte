<script setup>
import espriu from '../assets/obra/espriu.json'
import Gallery from '../components/Gallery.vue'
</script>


<script>
export default {
  data() {
    return {
      name: 'espriu',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="espriu" :name="name" />
  </div>
</template>

<style scoped>

</style>
