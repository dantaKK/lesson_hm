// react 全面hooks 函数式编程

import {useEffect} from 'react'
const Home = () => {
    useEffect(()=>{
        // onMounted
        document.title = '关于'
    },[])
    return (
        <div>
            <h1>关于</h1>
            <p>东华理工</p>
        </div>
    )

}
export default Home