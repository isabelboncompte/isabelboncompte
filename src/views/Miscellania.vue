<script setup>
import miscellania from '../assets/obra/miscellania.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'miscellania',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="miscellania" :name="name" />
  </div>
</template>

<style scoped>

</style>
