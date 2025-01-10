import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue 全家桶的最后一个 状态管理库
import {createPinia} from 'pinia'
const app=createApp(App)
// 大型项目 

const pinia=createPinia();
// pinia 的实例 vue 全家桶中的Store


app.use(pinia).mount('#app')
