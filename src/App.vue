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

/* One shared gutter for header and content so everything lines up. */
.header,
.body {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  font-weight: normal;
}

.peu {
  max-width: 1280px;
  font-weight: normal;
  height: 40px;
}

@media (max-width: 768px) {
  .header,
  .body {
    padding: 0 1rem;
  }
}
</style>
