import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faArrowLeft,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faSortAmountDesc,  faThLarge, faThList
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faArrowLeft, faThList,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faSortAmountDesc, faThLarge);


const app = createApp(App).use(Buefy).use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')