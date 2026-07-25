<script>
import ceramica from '../assets/obra/ceramica.json'

const thumbs = import.meta.glob('../assets/obra/Ceràmica/*.jpg', {
  eager: true,
  import: 'default',
  query: { format: 'webp', w: 900, quality: 80 }
})

const fulls = import.meta.glob('../assets/obra/Ceràmica/*.jpg', {
  eager: true,
  import: 'default',
  query: { format: 'webp', w: 1600, quality: 85 }
})

function assetFor(map, file) {
  return map[`../assets/obra/Ceràmica/${file}`]
}

export default {
  data() {
    return {
      pieces: ceramica,
      viewer: null, // { piece, imageIndex }
    }
  },
  computed: {
    categories() {
      const order = []
      const groups = {}
      for (const piece of this.pieces) {
        if (!groups[piece.category]) {
          groups[piece.category] = []
          order.push(piece.category)
        }
        groups[piece.category].push(piece)
      }
      return order.map(name => ({ name, pieces: groups[name] }))
    },
  },
  methods: {
    thumb(piece) {
      return assetFor(thumbs, piece.images[0])
    },
    full(piece, index) {
      return assetFor(fulls, piece.images[index])
    },
    open(piece) {
      this.viewer = { piece, imageIndex: 0 }
    },
    close() {
      this.viewer = null
    },
    next(delta) {
      if (!this.viewer) return
      const n = this.viewer.piece.images.length
      this.viewer.imageIndex = (this.viewer.imageIndex + delta + n) % n
    },
    onKey(e) {
      if (!this.viewer) return
      if (e.key === 'Escape') this.close()
      if (e.key === 'ArrowRight') this.next(1)
      if (e.key === 'ArrowLeft') this.next(-1)
    },
    priceLabel(piece) {
      if (piece.sold) return 'Venuda'
      if (piece.price) return `${piece.price} €`
      return 'Preu a la botiga'
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

<template>
  <div class="ceramica">
    <header class="intro">
      <h1 class="intro-title">Ceràmica</h1>
      <p class="intro-text">
        Peces úniques fetes al torn. Cada peça és irrepetible: la forma, l'esmalt
        i el foc fan que no n'hi hagi dues d'iguals.
      </p>
      <p class="intro-note">
        Les peces es venen exclusivament a la botiga.
        Si t'interessa alguna peça, vine a veure-la de prop.
      </p>
    </header>

    <section v-for="category in categories" :key="category.name" class="category">
      <h2 class="category-title">{{ category.name }}</h2>
      <div class="grid">
        <figure
          v-for="piece in category.pieces"
          :key="piece.name"
          class="card"
          :class="{ 'is-sold': piece.sold }"
          @click="open(piece)"
        >
          <div class="card-image">
            <img :src="thumb(piece)" :alt="piece.name" loading="lazy" />
            <span v-if="piece.images.length > 1" class="more-views">
              +{{ piece.images.length - 1 }}
            </span>
          </div>
          <figcaption class="card-caption">
            <span class="piece-name">{{ piece.name }}</span>
            <span class="piece-price" :class="{ sold: piece.sold }">{{ priceLabel(piece) }}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <div v-if="viewer" class="lightbox" @click.self="close">
      <button class="lightbox-close" aria-label="Tancar" @click="close">×</button>
      <button
        v-if="viewer.piece.images.length > 1"
        class="lightbox-arrow left"
        aria-label="Anterior"
        @click="next(-1)"
      >‹</button>
      <div class="lightbox-content">
        <img :src="full(viewer.piece, viewer.imageIndex)" :alt="viewer.piece.name" />
        <div class="lightbox-caption">
          <span class="piece-name">{{ viewer.piece.name }}</span>
          <span v-if="viewer.piece.technique"> · {{ viewer.piece.technique }}</span>
          <span class="piece-price" :class="{ sold: viewer.piece.sold }">
            {{ priceLabel(viewer.piece) }}
          </span>
        </div>
      </div>
      <button
        v-if="viewer.piece.images.length > 1"
        class="lightbox-arrow right"
        aria-label="Següent"
        @click="next(1)"
      >›</button>
    </div>
  </div>
</template>

<style scoped>
.ceramica {
  padding: 0 1rem;
}

.intro {
  max-width: 640px;
  margin: 3rem auto 4rem;
  text-align: center;
}

.intro-title {
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2c2c2c;
}

.intro-text {
  margin-top: 1.25rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;
}

.intro-note {
  margin-top: 1rem;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  color: #965c00;
}

.category {
  margin-bottom: 4rem;
}

.category-title {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a8a8a;
  border-bottom: 1px solid #e5e0d8;
  padding-bottom: 0.6rem;
  margin-bottom: 1.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem 1.5rem;
}

.card {
  margin: 0;
  cursor: pointer;
}

.card-image {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f4f1ec;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-image img {
  transform: scale(1.03);
}

.is-sold .card-image img {
  opacity: 0.75;
}

.more-views {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.85);
  color: #555;
  font-size: 0.75rem;
  padding: 0.1rem 0.45rem;
  border-radius: 2px;
}

.card-caption {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 0.7rem;
}

.piece-name {
  font-size: 0.95rem;
  color: #2c2c2c;
}

.piece-price {
  font-size: 0.85rem;
  color: #965c00;
  white-space: nowrap;
}

.piece-price.sold {
  color: #b0b0b0;
  font-style: italic;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(20, 18, 15, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: min(92vw, 1100px);
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.lightbox-caption {
  margin-top: 1rem;
  color: #e8e4de;
  font-size: 0.95rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 0.35rem 1rem;
  align-items: baseline;
  padding: 0 1rem;
}

.lightbox-caption .piece-name {
  color: #e8e4de;
}

.lightbox-caption .piece-price {
  color: #d9a95c;
}

.lightbox-close,
.lightbox-arrow {
  position: fixed;
  background: none;
  border: none;
  color: #e8e4de;
  cursor: pointer;
  line-height: 1;
  padding: 0.5rem;
}

.lightbox-close {
  top: 1rem;
  right: 1.25rem;
  font-size: 2.5rem;
}

.lightbox-arrow {
  top: 50%;
  transform: translateY(-50%);
  font-size: 3.5rem;
}

.lightbox-arrow.left {
  left: 0.75rem;
}

.lightbox-arrow.right {
  right: 0.75rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1rem;
  }

  .intro-title {
    font-size: 1.6rem;
  }

  .lightbox-arrow {
    top: auto;
    bottom: 1rem;
  }
}
</style>
