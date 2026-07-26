<template>
  <div>
    <img src="../assets/obra/Murs i camins/Paret del brugent al pont vell.jpg?format=webp&w=1600&quality=85" class="full-width-image" alt="Paret del Brugent al Pont Vell — pintura d'Isabel Boncompte" />
    <h1 class="title is-1 has-text-centered mt-6">Isabel Boncompte</h1>

    <div class="row">
      <div class="column text-column">
        <h2 class="title is-2 has-text-centered">{{ t('home.quisoc') }}</h2>
        <p>{{ t('home.intro') }}</p>
        <p class="mt-4">{{ t('home.linies') }}</p>
        <p>{{ t('home.linia1') }}</p>
        <p>{{ t('home.linia2') }}</p>
      </div>
      <div class="column image-column">
        <img src="../assets/obra/Retrats/Moment.jpg?format=webp&w=1200&quality=85" class="full-width-image" alt="Moment — retrat a l'oli d'Isabel Boncompte" />
      </div>
    </div>
  </div>
</template>

<script>
import { t, locale } from '../i18n.js'

export default {
  computed: {
    locale() {
      return locale.value
    },
  },
  methods: { t },
};
</script>

<style scoped>

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.column {
  flex-basis: 50%;
}

.image-column {
  order: 2;
}

.image-column img {
  max-height: 70vh;
  width: auto;
  margin: 0 auto;
  display: block;
}

.text-column {
  order: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.text-column p {
  margin: 0;
}

/* Switch to single-column layout on smaller screens */
@media (max-width: 768px) {
  .column {
    flex-basis: 100%;
  }
  .image-column, .text-column {
    margin: 20px 0;
  }
  .image-column {
    order: 2;
  }
  .text-column {
    order: 1;
  }
}
</style>