<script setup>
import picorandan from '../assets/obra/picorandan.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'picorandan',
      title: 'Picorandan'
    };
  },
};
</script>

<template>
  <div>
    <Gallery :images="picorandan" :name="name" :title="title"/>
  </div>
</template>

<style scoped>

</style>
