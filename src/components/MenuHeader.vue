<template>
    <header>
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Isabel Boncompte
            </b-navbar-item>
        </template>
  
        <template #end>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            {{ t('nav.home') }}
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/ceramica' }">
            {{ t('nav.botiga') }}
          </b-navbar-item>
          <b-navbar-item tag="div">
            <b-navbar-dropdown :label="t('nav.obra')" right=false dropdownClass="custom-submenu">
              <b-navbar-item
                v-for="(item, index) in menu"
                :key="index"
                :value="item.to"
                @click="$router.push(item.to)"
              >
              {{ item.label }}
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/biografia' }">
            {{ t('nav.biografia') }}
          </b-navbar-item>
          <b-navbar-item tag="div" class="lang-switch">
            <button
              v-for="l in LOCALES"
              :key="l"
              type="button"
              class="lang-btn"
              :class="{ active: l === locale }"
              :aria-label="'Idioma ' + l"
              @click="setLocale(l)"
            >{{ l.toUpperCase() }}</button>
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
  </template>
  
  <script>
import { menuItems } from '../series.js'
import { t, locale, setLocale, LOCALES } from '../i18n.js'

export default {
  data() {
    return {
      menu: menuItems,
      LOCALES,
    }
  },
  computed: {
    locale() {
      return locale.value
    },
  },
  methods: {
    t,
    setLocale,
  },
}
  </script>
  
  <style>
/* Buefy renders the dropdown caret and active states with its $primary
   (purple); force the site's ochre instead. Unscoped on purpose: the
   navbar dropdown is rendered outside this component's scope ids. */
.navbar-item .icon,
.navbar-link:not(.is-arrowless)::after,
.navbar-dropdown .navbar-item.is-active {
  color: #965c00 !important;
  border-color: #965c00 !important;
}

.navbar-burger span {
  color: #965c00;
}

.navbar,
.navbar-menu,
.navbar-dropdown {
  background-color: var(--color-background) !important;
}

.lang-switch {
  gap: 0.15rem;
}

.lang-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: #6f6f6f;
  padding: 0.4rem 0.35rem;
  min-height: 44px;
}

.lang-btn.active {
  color: #965c00;
  font-weight: 600;
}
  </style>