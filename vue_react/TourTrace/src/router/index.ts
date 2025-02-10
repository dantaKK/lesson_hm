import {createRouter,createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
const rootRoutes:RouteRecordRaw[]=[
     {
     path:'home',
     name:'Home',
     meta:{
         title:'首页',
         cache:true
     },
     component:()=>import('../views/Home/Home.vue')
     },
     {
          path:'video',
          name:'Video',
          meta:{
               title:'视频',
               cache:true
          },
          component:()=>import("../views/Video/Video.vue")

     },
     { 
          path:'my',
          name:'My',
          meta:{
               title:'我的',
               cache:true
          },
          component:()=>import('../views/My/Mine.vue')
     },
     {
          path:'information',
          name:'Information',
          meta:{
               title:'消息',
               cache:true
          },
          component:()=>import('../views/Information/Information.vue')
     }
]
const routes :RouteRecordRaw[]=[
     {
          path:'/',
          name:'App',
          component:()=>import('../views/KeepAlive.vue'),
          redirect:'/home',
          children:rootRoutes
     },
     {
          path:'/login',
          name:'Login',
          component:()=>import('../views/Login.vue') 
     }
]
const router=createRouter({
     history:createWebHistory(),
     routes 
})
router.beforeEach((to,from,next)=>{
     document.title=to.meta.title as string
     next()
})


export default router