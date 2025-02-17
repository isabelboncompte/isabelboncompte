<script>
import { RouterView } from 'vue-router'
import MenuHeader from './components/MenuHeader.vue'

export default {
  components: { MenuHeader, RouterView }
}
</script>

<template class="container">
  <header class="header">
    <MenuHeader />
  </header>
  <div class="body">
    <RouterView />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
}

.body {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  /* Other styles */
}
</style>
