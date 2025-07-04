import { createApp } from 'vue'
import App from './App.vue'
import router from './Router' // ← ini wajib ada

createApp(App).use(router).mount('#app') // ← router dipasang ke app
