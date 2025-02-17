import { useState,useEffect } from "react"

// react 新特性 hooks 全面内置hook, vue 学了点
// use 开头 hooks 函数式编程
const NotFound = () => {
    const [count,setCount] = useState(0)

    const add = ()=>{
        setCount(count+1)
    }
    // 副作用 生命周期挂载后  onMounted onUpdated
    useEffect(()=>{
       console.log('title执行')
       document.title = '404'
       return ()=>{  // onUnmounted
          console.log('title销毁')
         
       }
    },[])
    // 更新  onMounted + onUpdated
    useEffect(()=>{
       console.log('count',count)
    },[count])
    return (
        <div>
            <h1 onClick={add}>404</h1>
            <p>Not Found</p>
        </div>
    )
}
export default NotFound