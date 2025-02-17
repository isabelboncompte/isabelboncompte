<template>
  <h1 class="title">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h1>

  <div class="gallery">
    {{ imgUrls }}
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <router-link :to="{ name: 'image-viewer', params: { index }, query: { name } }">
        <img :src="`${github}${image.image}`" :alt="image.name" />
        <span class="image-name">{{ image.name }}</span>
      </router-link>
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
    name: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      github: 'https://raw.githubusercontent.com/isabelboncompte/isabelboncompte/refs/heads/main/src',
    };
  },
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
  position: relative;
}

.image-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #3d3d3d;
  font-size: 1.2rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
}

.gallery-item:hover img {
  opacity: 0.2;
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: opacity 0.2s ease-in-out;
}

.gallery-item:hover .image-name {
  opacity: 1;
}
  </style>