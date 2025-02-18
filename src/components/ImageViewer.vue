<template>
    <div class="image-viewer">
      <img :src="currentImage" style="padding-top: 16px; padding-bottom: 16px;" />
      <h6 class="title is-4" v-if="response && response.name">{{ response.name }}</h6>
      <p class="description" v-if="response && response.year">Any: {{ response.year }}</p>
      <p class="description" v-if="response && response.year">Tècnica: {{ response.technique }}</p>
      <p class="description" v-if="response && response.size">Mida: {{ response.size.width }} x {{ response.size.height }}cm</p>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        github: 'https://raw.githubusercontent.com/isabelboncompte/isabelboncompte/refs/heads/main/src',
        name: null,
        index: null,
        currentImage: null,
        description: null,
        response: null
      };
    },
    async mounted() {
      try {
        const { index } = this.$route.params;
        const { name } = this.$route.query;
        this.index = index;
        this.name = name;
        const json = await fetch('https://raw.githubusercontent.com/isabelboncompte/isabelboncompte/main/src/assets/obra/'+ this.$route.query.name +'.json');
        const response = await json.json();
        console.log(response)
        // Use the botanica data here
        console.log(response[index])
  
        this.currentImage = `${this.github}${response[index].image}`;
        this.response = response[index];

        this.description = response[index].description; // Assuming 'description' is a key in your JSON
      } catch (error) {
        console.error('Error loading JSON:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .image-viewer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden; /* Prevent scrolling */
  }
  
  .image-viewer img {
    object-fit: contain;
    width: 82%; /* Reduced width to fit description */
    height: 82%;
    margin-bottom: -4px; /* Add some space between image and description */
  }
  
  .description {
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
  }
  </style>