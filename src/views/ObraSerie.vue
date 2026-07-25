<template>
  <div>
    <Gallery v-if="images" :images="images" :name="jsonName" :title="title" />
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue'
import { series } from '../series.js'

const data = import.meta.glob('../assets/obra/*.json', { eager: true, import: 'default' })

export default {
  components: { Gallery },
  computed: {
    entry() {
      return series[this.$route.params.slug]
    },
    jsonName() {
      return this.entry?.json
    },
    title() {
      return this.entry?.title
    },
    images() {
      return this.entry ? data[`../assets/obra/${this.entry.json}.json`] : null
    },
  },
}
</script>
