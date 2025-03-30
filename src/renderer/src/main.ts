import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue imports
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura';

const app = createApp(App)
app.use(PrimeVue)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')

