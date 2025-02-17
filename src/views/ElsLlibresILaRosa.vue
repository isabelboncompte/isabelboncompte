<script setup>
import els_llibres_i_la_rosa from '../assets/obra/els_llibres_i_la_rosa.json'
import Gallery from '../components/Gallery.vue'
</script>

<script>
export default {
  data() {
    return {
      name: 'els_llibres_i_la_rosa',
    };
  },
};
</script>


<template>
  <div>
    <Gallery :images="els_llibres_i_la_rosa" :name="name" />
  </div>
</template>

<style scoped>

</style>
