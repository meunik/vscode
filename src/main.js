import { createApp } from 'vue'
import '@/assets/css/style.css'
import '@/assets/css/dark.css'
import '@/assets/css/light.css'
import '@/assets/css/monokai.css'
import '@/assets/css/dracula.css'
import '@/assets/css/solarized.css'
import App from './App.vue'

import ui from '@nuxt/ui/vue-plugin'
import router from '@/router'
import i18n from '@/i18n/i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(ui)
app.mount('#app')