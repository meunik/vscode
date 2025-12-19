import { createApp } from 'vue'
import '@/assets/css/style.css'
import App from './App.vue'

import ui from '@nuxt/ui/vue-plugin'
import router from '@/router'
import i18n from '@/i18n/i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(ui)
app.mount('#app')