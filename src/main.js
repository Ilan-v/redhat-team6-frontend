import './style.css'
import 'primevue/resources/themes/aura-light-teal/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router).use(PrimeVue)

app.mount('#app')
