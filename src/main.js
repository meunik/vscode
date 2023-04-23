import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

//Relativos ao Axios (para consumir APIs)
import axios from 'axios'
import VueAxios from 'vue-axios'

//Relativos ao Bootstrap Vue 4
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "lodash";

//MomentJs
import MomentJs from 'vue-moment'

//Import de CSS Global
import './assets/css/global.css'
import './assets/css/padronizados.css'
import './assets/css/markdown-it.css'
import './assets/css/media-mobile.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fab, fas, far)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(PhotoSwipeLightbox);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(MomentJs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

console.log(`Compilação gerada em: ${new Date(process.env.VUE_APP_COMPILIATION_DATE).toLocaleString()}`);
