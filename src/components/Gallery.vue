<template>
  <div>
    <b-skeleton v-if="!imagesLoaded" width="100%" height="80vh"></b-skeleton>
    <div v-if="imagesLoaded" class="ml-3 mr-3">
      <div class="row">
        <h1 class="title">{{ title }}</h1>
        <font-awesome-icon  v-if="!isPhoneScreen" :icon="iconName" @click="toggleStyle">
        </font-awesome-icon>
      </div>
    </div>


    <div v-if="imagesLoaded" :class="['gallery', style]" class="m-2">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <router-link :to="{ name: 'image-viewer', params: { index }, query: { name } }">
          <img :src="`${github}${image.image}`" :alt="image.name" :class="{ 'max-height': style === 'vertical' }"  />
          <span v-if="style === 'grid'" class="image-name">{{ image.name }}</span>
        </router-link>
        <div v-if="style === 'vertical'" class="vertical-text">
          <h6 class="title is-4 image-title" v-if="image && image.name">{{ image.name }}</h6>
          <p class="image-description">Any: {{ image.year }}</p>
          <p class="image-description">Tècnica: {{ image.technique }}</p>
          <p class="image-description">Mida: {{ image.size.width }} x {{ image.size.height }}</p>
        </div>
      </div>

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
      required: false,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      github: 'https://raw.githubusercontent.com/isabelboncompte/isabelboncompte/refs/heads/main/src',
      imagesLoaded: false,
      style: localStorage.getItem('galleryStyle') || 'grid', 
      iconName: 'fa-solid fa-th-large',
      isPhoneScreen: window.innerWidth < 768
    };
  },
  mounted() {
    // Create a new Promise that resolves when all images are loaded
    Promise.all(this.images.map(image => {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = `${this.github}${image.image}`;
      });
    })).then(() => {
      this.imagesLoaded = true;
    });
    window.addEventListener('resize', this.updateIsPhoneScreen);
    this.updateIsPhoneScreen();
  },
  methods: {
    toggleStyle() {
      this.style = this.style === 'grid' ? 'vertical' : 'grid';
      this.iconName = this.iconName === 'fa-solid fa-th-large' ? 'fa-solid fa-th-list' : 'fa-solid fa-th-large';
      localStorage.setItem('galleryStyle', this.style); 
    },
    updateIsPhoneScreen() {
      this.isPhoneScreen = window.innerWidth < 768;
      if (this.isPhoneScreen){
        this.style = 'vertical'
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIsPhoneScreen);
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 1rem;
}

.style-toggle {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
}

.style-toggle:hover {
  background-color: #3e8e41;
}

.gallery {
  column-count: 3; /* adjust the number of columns as needed */
  column-gap: 8px; /* adjust the gap as needed */
  row-gap: 10px;
}

.gallery.vertical {
  column-count: 1;
  padding: 0;
}

.gallery.vertical .gallery-item img {
  width: 100%;
  height: auto; /* Set height to auto */
  object-fit: contain; /* Make the image fit within the container */
}

.vertical-text {
  margin-top: 24px;
  margin-bottom: 32px;
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

.max-height {
  max-height: 80vh;
  object-fit: contain;
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: opacity 0.2s ease-in-out;
}

.gallery-item:hover img {
  opacity: 0.2;
}

.gallery-item:hover .image-name {
  opacity: 1;
}

.gallery.vertical .gallery-item:hover img {
  opacity: 1; /* Override the hover effect */
}

.gallery.vertical .gallery-item:hover .image-name {
  opacity: 0; /* Override the hover effect */
}

a:hover {
  background-color: transparent;
  outline: none;
  box-shadow: none;
}

.gallery.vertical .gallery-item .image-name {
  margin-top: 0.5rem;
  text-align: center;
  color: #333;
}

.gallery.vertical .gallery-item .image-description {
  margin-top: 0;
  text-align: center;
  color: #333;
}

.gallery.vertical .gallery-item .image-title {
  text-align: center;
  margin-bottom: 8px;
  margin-top: 4px;
  color: #333;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-icon {
  margin-left: auto;
}
</style>