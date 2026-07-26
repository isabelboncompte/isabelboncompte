<script>
import { RouterView } from 'vue-router'
import MenuHeader from './components/MenuHeader.vue'

export default {
  components: { MenuHeader, RouterView }
}
</script>

<template>
  <header class="header">
    <MenuHeader />
  </header>
  <div class="body">
    <RouterView />
  </div>
  <footer class="peu">
    <div class="peu-inner">
      <div class="peu-cols">
        <div class="peu-col peu-brand">
          <p class="peu-name">Isabel Boncompte</p>
          <p class="peu-sub">Pintura i ceràmica</p>
        </div>
        <div class="peu-col">
          <h3 class="peu-label">Contacte</h3>
          <p>
            <a class="peu-link" href="mailto:info@isabelboncompte.com">info@isabelboncompte.com</a>
          </p>
        </div>
        <div class="peu-col">
          <h3 class="peu-label">Botiga</h3>
          <p>Les peces de ceràmica es venen exclusivament a la botiga.</p>
        </div>
      </div>
      <div class="peu-legal">
        <p>© {{ new Date().getFullYear() }} Isabel Boncompte. Tots els drets reservats.</p>
      </div>
    </div>
  </footer>
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
  margin-top: 4rem;
  border-top: 1px solid #e5e0d8;
  background: #faf8f4;
}

.peu-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 2rem;
}

.peu-cols {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.4fr;
  gap: 2rem 1.5rem;
}

.peu-col p {
  margin: 0 0 0.35rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #555;
}

.peu-name {
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2c2c2c;
}

.peu-sub {
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: #8a8a8a;
}

.peu-label {
  margin: 0 0 0.75rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a8a8a;
}

.peu-link {
  color: #2c2c2c;
  border-bottom: 1px solid #e5e0d8;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.peu-link:hover {
  color: #965c00;
  border-color: #965c00;
}

.peu-legal {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e0d8;
}

.peu-legal p {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  color: #8a8a8a;
}

@media (max-width: 768px) {
  .header,
  .body {
    padding: 0 1rem;
  }

  .peu-inner {
    padding: 2rem 1rem 1.5rem;
  }

  .peu-cols {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
