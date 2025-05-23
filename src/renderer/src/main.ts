import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(vuetify)
app.use(PrimeVue, {
    unstyled: true
})
app.mount('#app')
