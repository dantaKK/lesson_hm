import axios from "axios";
import { Toast } from "zarm";

//  以后路径自动带上/api
//  localhost:3000/api 直接访问，但是跨域了
axios.defaults.baseURL='/api'
// 跨域 默认不带cookie 
axios.defaults.withCredentials=true // 跨域携带cookie
// 自定义 后端知道 异步的请求 约定 
axios.defaults.headers['X-Request-with']='XMLHttpRequest'
// JWT token Authorization 授权码
axios.defaults.headers['Authorization']=`${localStorage.getItem('token')}||null`
axios.defaults.headers.post['Content-Type']='application/json';

// axios.interceptors.request.use(config=>{
//     // console.log('拦截成功',config)
//     config.headers['Authorization']=`${localStorage.getItem('token')}||null`
//     return config 
// })
// //  响应拦截 拦截器
axios.interceptors.response.use(res=>{
//    console.log('拦截成功',res.data)
   //  统一处理错误
   // 加工数据
   if(typeof res.data!=='object'){
    Toast.show('服务端异常!')
    // reject resolve 
    return Promise.reject(res)
   }
   if(res.data.code!==200){
    if(res.data.msg)
        Toast.show(res.data.msg)
    if(res.data.code===401){
        // 401 unauthorized 未经授权 客服端错误
        //  跳转到登录页
        window.location.href='/login' 
    }
    return Promise.reject(res.data)
   }
   return res.data
})

export default axios