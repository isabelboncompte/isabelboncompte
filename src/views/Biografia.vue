<template>
  <div class="bio">
    <h1 class="title is-1 has-text-centered mt-6">{{ t('bio.title') }}</h1>

    <div class="bio-content">
      <section v-for="section in sections" :key="section.label">
        <h2 class="eyebrow">{{ section.label }}</h2>
        <ul>
          <li v-for="(item, i) in section.items" :key="i">
            <template v-if="Array.isArray(item)">
              <strong>{{ item[0] }}</strong> — {{ item[1] }}
            </template>
            <template v-else>{{ item }}</template>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { t, locale } from '../i18n.js'
import { bio } from '../bio.js'

export default {
  computed: {
    locale() {
      return locale.value
    },
    sections() {
      return (bio[locale.value] ?? bio.ca).sections
    },
  },
  methods: { t },
}
</script>

<style scoped>
.bio-content {
  max-width: 46rem;
  margin: 3rem auto 4rem;
}

.bio-content section {
  margin-bottom: 3rem;
}

.bio-content .eyebrow {
  margin-bottom: 1.25rem;
}

.bio-content ul {
  list-style: none;
  padding: 0;
}

.bio-content li {
  margin-bottom: 0.85rem;
  line-height: 1.7;
}

.bio-content li strong {
  color: var(--color-ink);
  font-weight: 500;
}
</style>
