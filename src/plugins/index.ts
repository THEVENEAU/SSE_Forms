import vuetify from './vuetify'
import router from './vue-router'
import pinia from './pinia'
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(router)
  app.use(pinia)
}
