import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

createApp(App).use(Buefy).use(router).mount('#app')
