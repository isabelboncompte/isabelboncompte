<template>
    <div class="gallery">
        {{ imgUrls }}
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="`${github}${image.image}`" :alt="image.name" />
      </div>
    </div>
  </template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
    return {
      github: 'https://raw.githubusercontent.com/isabelboncompte/isabelboncompte/refs/heads/main/src'
    }
  }
  };
</script>
  
  <style scoped>
.gallery {
  column-count: 3; /* adjust the number of columns as needed */
  column-gap: 8px; /* adjust the gap as needed */
  row-gap: 10px;
}

.gallery-item {
  display: inline-block;
  width: 100%;
}

.gallery-item img {
  width: 100%;
  height: auto;
}
  </style>