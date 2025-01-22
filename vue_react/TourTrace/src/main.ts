import { createApp } from 'vue'
import {createPinia} from 'pinia'
import router from './router/index.ts'
import './assets/tailwind.css'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()) // pinia 启用
app.use(router)
app.mount('#app')