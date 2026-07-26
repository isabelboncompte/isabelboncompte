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
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/ceramica' }">
            Botiga
          </b-navbar-item>
          <b-navbar-item tag="div">
            <b-navbar-dropdown label="Obra" right=false dropdownClass="custom-submenu">
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
            Biografia
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
  </template>
  
  <script>
import { menuItems } from '../series.js'

export default {
  data() {
    return {
      menu: menuItems,
    }
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
  </style>