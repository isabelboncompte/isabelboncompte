<template>
  <div>
    <div>
      <div class="row">
        <h1 class="title">{{ title }}</h1>
        <button
          v-if="!isPhoneScreen"
          class="style-toggle-btn"
          type="button"
          :aria-label="t('gallery.viewToggle')"
          @click="toggleStyle"
        >
          <font-awesome-icon :icon="iconName" aria-hidden="true" />
        </button>
      </div>
    </div>


    <div :class="['gallery', style]">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <router-link :to="{ name: 'image-viewer', params: { index }, query: { name } }">
          <img :src="resolve(image.image)" :alt="image.name" loading="lazy" :class="{ 'max-height': style === 'vertical' }"  />
          <span v-if="style === 'grid'" class="image-name">{{ image.name }}</span>
        </router-link>
        <div v-if="style === 'vertical'" class="vertical-text">
          <h6 class="title is-4 image-title" v-if="image && image.name">{{ image.name }}</h6>
          <p class="image-description" v-if="image.year">{{ t('gallery.any') }}: {{ image.year }}</p>
          <p class="image-description" v-if="image.technique">{{ t('gallery.tecnica') }}: {{ image.technique }}</p>
          <p class="image-description" v-if="image.size">{{ t('gallery.mida') }}: {{ image.size.height }} x {{ image.size.width }}</p>
        </div>
      </div>

  </div>
  </div>
</template>

<script>
import { t, locale } from '../i18n.js'

// All artwork is resized to 900px-wide WebP at build time and served from the
// site itself instead of full-resolution JPGs from raw.githubusercontent.com.
const optimized = import.meta.glob('../assets/obra/**/*.jpg', {
  eager: true,
  import: 'default',
  query: { format: 'webp', w: 900, quality: 80 }
})

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
      style: localStorage.getItem('galleryStyle') || 'grid',
      iconName: 'fa-solid fa-th-large',
      isPhoneScreen: window.innerWidth < 768
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateIsPhoneScreen);
    this.updateIsPhoneScreen();
  },
  computed: {
    locale() {
      return locale.value
    },
  },
  methods: {
    t,
    resolve(imagePath) {
      // JSON paths look like "/assets/obra/Botànica/Rosella.jpg"
      return optimized[`..${imagePath}`];
    },
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
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsPhoneScreen);
  }
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  letter-spacing: 0.02em;
  margin: 2rem auto 1.5rem;
}

.gallery {
  column-count: 3;
  column-gap: 1.25rem;
}

.gallery-item {
  margin-bottom: 1.25rem;
  break-inside: avoid;
}

@media (max-width: 1100px) {
  .gallery {
    column-count: 2;
  }
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
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem 0.75rem;
  background: rgba(20, 18, 15, 0.65);
  color: #f4f1ec;
  font-size: 0.9rem;
  text-align: left;
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
  opacity: 0.92;
}

.gallery-item:hover .image-name,
.gallery-item:focus-within .image-name {
  opacity: 1;
}

.gallery-item a:focus-visible {
  outline: 2px solid #965c00;
  outline-offset: 2px;
}

.style-toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  min-width: 44px;
  min-height: 44px;
  color: inherit;
}

.gallery.vertical .gallery-item:hover img {
  opacity: 1; /* Override the hover effect */
}

.gallery.vertical .gallery-item:hover .image-name {
  opacity: 0; /* Override the hover effect */
}

a:hover {
  background-color: transparent;
  box-shadow: none;
}

.gallery.vertical .gallery-item .image-name {
  margin-top: 0.5rem;
  text-align: center;
  color: var(--color-ink);
}

.gallery.vertical .gallery-item .image-description {
  margin-top: 0;
  text-align: center;
  color: var(--color-ink);
}

.gallery.vertical .gallery-item .image-title {
  text-align: center;
  margin-bottom: 8px;
  margin-top: 4px;
  color: var(--color-ink);
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