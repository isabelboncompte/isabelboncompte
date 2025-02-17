<script setup>
import apunts_figura from '../assets/obra/apunts_figura.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'apunts_figura',
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="apunts_figura" :name="name"/>
  </div>
</template>

<style scoped>

</style>
