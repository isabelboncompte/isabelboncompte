<script setup>
import miscellania from '../assets/obra/miscellania.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'miscellania',
      title: 'Miscel·lania'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="miscellania" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
