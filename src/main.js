import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Only the Buefy components actually used, instead of the whole library.
import Navbar from 'buefy/dist/esm/navbar.js'
import Skeleton from 'buefy/dist/esm/skeleton.js'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faThLarge, faThList, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft, faThLarge, faThList, faAngleDown)

const app = createApp(App).use(Navbar).use(Skeleton).use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
