// 创建仓库
// 实例化一个仓库 redux==vuex
// 统一代码仓库 只有一个库 树状结构 
// 好大，建立子仓 
// count 融入
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './count'

const rootReducer = {
    counter:counterSlice
}

const store = configureStore({
    reducer:rootReducer
})

// 返回store 实例
export default store;