<template>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.image" :alt="image.name" />
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
  };
  </script>
  
  <style scoped>
.gallery {
  column-count: 4; /* adjust the number of columns as needed */
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