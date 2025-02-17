<script setup>
import retrats from '../assets/obra/retrats.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'retrats',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="retrats" :name="name" />
  </div>
</template>

<style scoped>

</style>
