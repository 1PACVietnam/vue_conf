import en from './en'
import vi from './vi'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const baseLocale = 'vi'

export default new VueI18n({
  locale: baseLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    vi
  }
})
