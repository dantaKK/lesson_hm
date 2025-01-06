import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Aboutson from '../views/About-son.vue'
// 路由配置
import {
    createRouter, // 创建路由实例  
    createWebHashHistory // 路由模式
} from 'vue-router' // 插件

const routes =[
    {
   path:'/home', // 路径
    component:Home // 页面组件
  },
  {
    path:'/about', // 路径
     component:About ,// 页面组件
      children:[
                 {
                     path:'meta',
                     component:Aboutson,
                 }
             ]
   }

]

const router=createRouter({
    // 创建路由
    history:createWebHashHistory(),
    // 路由模式
    routes  // 路由配置数组
})

export default router