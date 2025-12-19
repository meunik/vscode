import { createI18n } from 'vue-i18n'
import ptBR from '@/i18n//locales/pt-BR.json'
import enUS from '@/i18n//locales/en-US.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('idioma') || 'pt_br',
  fallbackLocale: 'pt_br',
  messages: {
    'pt_br': ptBR,
    'en': enUS
  }
})

export default i18n
