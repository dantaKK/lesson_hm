// 路由配置
import { createRouter, // 创建路由实例  
 createWebHistory,
} from 'vue-router' // 插件

// 路由配置数组
const routes = [
    {
       path:'/',
       name:'Home',  
       // 路由懒加载
       component:()=>import('../pages/Home.vue'),
       meta:{
        title:'首页',
        requireLogin:true,
         },
       children:[
        {
          path:'about',
          name:'About',
          component:()=>import('../pages/About.vue'),
          meta:{
            title:'关于',
            requireLogin:true,
             
          },
        }
       ]
    },
   {
    path:'/login',
    name:'login',
    component:()=>import('../pages/Login.vue'),
    meta:{
      title:'登入',
      requireLogin:false,
       },
   }
]

// 实例化路由对象
 const router = createRouter({
    // 创建路由
    history: createWebHistory(),
    // 路由模式
    routes // 路由配置数组
}) 
// 路由守卫
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title || '默认值'
    if(to.meta.requireLogin)
   {
     next('/login')
     return 
    }

    next()
})
export default router