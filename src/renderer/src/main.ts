import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import PrimeVue from 'primevue/config'

// PrimeVue imports
import 'primeicons/primeicons.css'

const app = createApp(App)
const pinia = createPinia()

app.use(vuetify)
app.use(pinia)
app.use(PrimeVue, {
    unstyled: true
})

app.mount('#app')

