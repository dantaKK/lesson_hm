// 路由配置
import {
    createRouter, // 创建路由实例  
    createWebHashHistory // 路由模式
} from 'vue-router' // 插件

// 页面级别组件放到views文件夹中
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// posts 模块 post文件夹
import PostIndex from '../views/post/index/post-Index.vue'
import PostShow from '../views/post/show/PostShow.vue'
import PostMeta from '../views/post/show/components/post-meta.vue'
// 文章模块
const postRoutes=[
    {
        path:'/posts',
        name:'postIndex',
        component:PostIndex,
        // 路由向页面级别组件传参  
        props:{
          sort:'popular',
        },
        meta:{
        
            title:"文章列表"
        }
    },
    {
        path:'/posts/:postId',
        component:PostShow,
        name:'postShow',
        meta:{
          
            title:"文章详情"
        },
        props:true,
        // 子路由， 路由的嵌套
        children:[
            {
                path:'meta',
                component:PostMeta,
            }
        ]

    },
    {

    }
]

// 路由配置
const routes=[
   {
    path:'/', // 路径
    component:Home, // 页面组件
    meta:{
        requireAuth:true,
       title:"首页"
    },
   },
   {
    path:'/about',
    meta:{
        requireAuth:true,
        title:"关于"
    },
    name:'about',  // 路由的名称
    component:About
   },
   ...postRoutes
]
// 创建路由实例
const router=createRouter({
    // 创建路由
    history:createWebHashHistory(),
    // 路由模式
    routes  // 路由配置数组
})

// 路由守卫
// 每次路由的切换都会执行这个回调
// router.beforeEach((to,from,next)=>{
//     document.title=to.meta.title || '智能办公'
//   // to 要去的路由
//   // from 离开的路由对象
//   // router +routes 构成路由
// //   console.log(to,from,'-----')
// // if(to.meta.requireAuth){
// // //   console.log('需要登录')

// // // url,redirect 跳转
// //   next('/login')
// // }
 
// })

export default router
