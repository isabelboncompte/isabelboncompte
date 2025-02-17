<template>
    <div class="image-viewer">
        <img :src="currentImage" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        github: 'https://raw.githubusercontent.com/isabelboncompte/isabelboncompte/refs/heads/main/src',
        name: null,
        index: null,
        currentImage: null
      };
    },
    async mounted() {
        try {
            const { index } = this.$route.params;
            const { name } = this.$route.query;
            this.index = index;
            this.name = name;
            const response = await import(/* @vite-ignore */ '../assets/obra/' + this.$route.query.name + '.json');
            const images = response.default;
            // Use the botanica data here
            console.log(images[index])

            this.currentImage = `${this.github}${images[index].image}`;
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
}

.image-viewer img {
  object-fit: contain;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
}
  
  .image-controls {
    margin-top: 20px;
  }
  
  .image-controls button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>