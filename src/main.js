import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

//Import de CSS Global
import './assets/css/global.css'

//Relativos ao Axios (para consumir APIs)
import axios from 'axios'
import VueAxios from 'vue-axios'

//Relativos ao Bootstrap Vue 4
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

console.log(`Compilação gerada em: ${new Date(process.env.VUE_APP_COMPILIATION_DATE).toLocaleString()}`);
