<template>
  <b-skeleton v-if="!imageLoaded" width="100%" height="80vh"></b-skeleton>

  <div v-if="imageLoaded" class="imageviewer">
      <button class="back-button" @click="$router.go(-1)">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </button>
    <div class="image-container">
      <img :src="currentImage" />
    </div>
    <h6 class="title is-5 title-margin" v-if="response && response.name">{{ response.name }}</h6>
    <p class="description" v-if="response && response.year"><strong>Any:</strong> {{ response.year }}</p>
    <p class="description" v-if="response && response.year"><strong>Tècnica:</strong> {{ response.technique }}</p>
    <p class="description" v-if="response && response.size"><strong>Mida:</strong> {{ response.size.width }} x {{ response.size.height }}cm</p>

  </div>
</template>


  
  <script>
  // Series data is bundled at build time; images are resized WebP served
  // from the site itself instead of raw.githubusercontent.com.
  const series = import.meta.glob('../assets/obra/*.json', {
    eager: true,
    import: 'default'
  })

  const optimized = import.meta.glob('../assets/obra/**/*.jpg', {
    eager: true,
    import: 'default',
    query: { format: 'webp', w: 1600, quality: 85 }
  })

  export default {
    data() {
      return {
        name: null,
        index: null,
        currentImage: null,
        description: null,
        response: null,
        imageLoaded: false,
      };
    },
    mounted() {
      try {
        const { index } = this.$route.params;
        const { name } = this.$route.query;
        this.index = index;
        this.name = name;
        const response = series[`../assets/obra/${name}.json`];

        this.currentImage = optimized[`..${response[index].image}`];
        this.response = response[index];

        this.description = response[index].description;
        this.imageLoaded = true;
      } catch (error) {
        console.error('Error loading series data:', error);
      }
    }
  };
  </script>
  
<style scoped>
  .imageviewer {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .imageviewer img {
  object-fit: contain;
  margin-top: -30px;
  width: auto; /* Keep natural width */
  height: auto; /* Keep natural height */
  max-width: 90vw; /* Ensure it fits the screen width */
  max-height: 70vh; /* Ensure it fits the screen height */
}

.title-margin {
  margin-top: 8px;
}



.back-button {
  top: 0px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
}

.image-container img {
  object-fit: contain;
  max-width: 100%;
  height: 100%;
}

@media only screen and (max-width: 768px) {
  .image-viewer {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    height: 100vh;
    margin-top: 0;
    padding: 16px;
    overflow-y: hidden; /* Add this line */

  }
  .back-button {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    margin: 16px auto;
    display: block;
  }
    .header {
    position: relative;
    margin-bottom: 16px;
  }
  .image-container {
    margin-top: 0;
  }
}

.image-container {
  margin-top: 50px; /* Match the height of the header */
}


  </style>