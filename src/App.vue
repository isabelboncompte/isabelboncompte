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
  <div class="peu">
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}

.body {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  /* Other styles */
}

.peu {
  max-width: 1280px;
  font-weight: normal;
  height: 40px;
}
</style>
