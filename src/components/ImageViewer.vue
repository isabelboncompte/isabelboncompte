<template>
  <b-skeleton v-if="!work" width="100%" height="80vh"></b-skeleton>

  <div v-if="work" class="imageviewer">
    <div class="viewer-bar">
      <button class="nav-button" :aria-label="t('viewer.back')" @click="goBack">
        <font-awesome-icon icon="fa-solid fa-arrow-left" aria-hidden="true" />
        <span class="nav-label">{{ seriesTitle }}</span>
      </button>
      <span v-if="items.length > 1" class="viewer-count">{{ index + 1 }} / {{ items.length }}</span>
    </div>

    <div class="image-container">
      <button
        v-if="index > 0"
        class="side-arrow left"
        :aria-label="t('shop.prev')"
        @click="go(-1)"
      >‹</button>
      <img :src="currentImage" :alt="work.name" />
      <button
        v-if="index < items.length - 1"
        class="side-arrow right"
        :aria-label="t('shop.next')"
        @click="go(1)"
      >›</button>
    </div>

    <h1 class="work-title">{{ work.name }}</h1>
    <p class="work-meta">
      <template v-if="work.year">{{ work.year }}</template>
      <template v-if="work.year && work.technique"> · </template>
      <template v-if="work.technique">{{ tTechnique(work.technique) }}</template>
      <template v-if="(work.year || work.technique) && work.size"> · </template>
      <template v-if="work.size">{{ work.size.width }} × {{ work.size.height }} cm</template>
    </p>
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

import { t, tTechnique, locale } from '../i18n.js'
import { series as registry } from '../series.js'

export default {
  computed: {
    locale() {
      return locale.value
    },
    name() {
      return this.$route.query.name
    },
    index() {
      return Number(this.$route.params.index) || 0
    },
    items() {
      return series[`../assets/obra/${this.name}.json`] ?? []
    },
    work() {
      return this.items[this.index] ?? null
    },
    currentImage() {
      return this.work ? optimized[`..${this.work.image}`] : null
    },
    seriesEntry() {
      return Object.entries(registry).find(([, s]) => s.json === this.name)
    },
    seriesTitle() {
      return this.seriesEntry?.[1]?.title ?? ''
    },
  },
  methods: {
    t,
    tTechnique,
    go(delta) {
      const next = this.index + delta
      if (next < 0 || next >= this.items.length) return
      this.$router.replace({ params: { index: next }, query: { name: this.name } })
    },
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else if (this.seriesEntry) {
        this.$router.push(`/obra/${this.seriesEntry[0]}`)
      } else {
        this.$router.push('/')
      }
    },
    onKey(e) {
      if (e.key === 'ArrowRight') this.go(1)
      if (e.key === 'ArrowLeft') this.go(-1)
      if (e.key === 'Escape') this.goBack()
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKey)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKey)
  },
}
</script>

<style scoped>
.imageviewer {
  text-align: center;
  padding-bottom: 2rem;
}

.viewer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0 1rem;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-muted);
  padding: 12px;
  min-width: 44px;
  min-height: 44px;
}

.nav-button:hover {
  color: var(--color-accent);
}

.nav-label {
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.viewer-count {
  font-size: 0.85rem;
  color: var(--color-muted);
  padding-right: 12px;
}

.image-container {
  position: relative;
}

.image-container img {
  object-fit: contain;
  max-width: min(90vw, 100%);
  max-height: 70vh;
  width: auto;
  height: auto;
}

.side-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  line-height: 1;
  color: var(--color-muted);
  padding: 0.5rem;
  min-width: 48px;
  min-height: 48px;
}

.side-arrow:hover {
  color: var(--color-accent);
}

.side-arrow.left {
  left: 0;
}

.side-arrow.right {
  right: 0;
}

.work-title {
  font-size: 1.3rem;
  margin-top: 1.25rem;
  color: var(--color-ink);
}

.work-meta {
  margin-top: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-muted);
}

@media (max-width: 768px) {
  .side-arrow {
    top: auto;
    bottom: -0.5rem;
  }
}
</style>
