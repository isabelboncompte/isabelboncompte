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

    <div class="work-label">
      <h1 class="work-title">{{ work.name }}</h1>
      <p v-if="work.year" class="work-year"><span class="label">{{ t('gallery.any') }}</span> {{ work.year }}</p>
      <p v-if="work.technique" class="work-technique"><span class="label">{{ t('gallery.tecnica') }}</span> {{ tTechnique(work.technique) }}</p>
      <p v-if="work.size" class="work-size"><span class="label">{{ t('gallery.mida') }}</span> {{ work.size.width }} × {{ work.size.height }} cm</p>
    </div>
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
  background: rgba(250, 248, 244, 0.85);
  border: 1px solid var(--color-hairline);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.8rem;
  line-height: 1;
  color: var(--color-ink);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 4px;
  box-shadow: 0 1px 6px rgba(20, 18, 15, 0.12);
}

.side-arrow:hover {
  color: var(--color-accent);
  background: #ffffff;
}

.side-arrow.left {
  left: 0.75rem;
}

.side-arrow.right {
  right: 0.75rem;
}

/* Museum-style wall label: stacked rows, left-aligned, centered block */
.work-label {
  display: inline-block;
  text-align: left;
  margin-top: 1.75rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-hairline);
}

.work-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.work-year,
.work-technique,
.work-size {
  margin: 0.3rem 0 0;
  font-size: 0.9rem;
  color: var(--color-muted);
}

.work-technique {
  margin-top: 0.1rem;
}

.work-size {
  margin-top: 0.1rem;
  font-size: 0.85rem;
}

.work-label .label {
  display: inline-block;
  min-width: 4.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9a958c;
  margin-right: 0.4rem;
}

@media (max-width: 768px) {
  .side-arrow.left {
    left: 0.5rem;
  }

  .side-arrow.right {
    right: 0.5rem;
  }
}
</style>
