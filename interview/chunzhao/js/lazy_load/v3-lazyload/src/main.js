import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazy from './directives/lazyLoad.js'

const app = createApp(App)
// 全局注册指令
app.directive('lazy', lazy)
app.mount('#app')