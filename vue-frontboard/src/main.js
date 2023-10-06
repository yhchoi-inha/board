import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081' // API Server
app.use(router).mount('#app')