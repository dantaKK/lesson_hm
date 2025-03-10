// vue 源码学习 深入学习
// vue 可以在后端运行
// vue 也是模块化写出来的，reactivity 模块
const {
    effect, // 副作用
    reactive // vue 响应式
} = require('@vue/reactivity')
// 不用挂载页面上，node 下 ?
let dummy 
// 响应式
const counter = reactive({
    num1: 1,
    num2: 2
})
// effect 是个函数
// 接收一个函数参数
// 自动更新 是函数,{{}},计算属性,生命周期...... 
effect(() => {
    // proxy get 收集依赖 
    dummy = counter.num1 + counter.num2
    console.log(dummy)
})

effect(() => {
   
    console.log(counter.num2+"-------");
})

setInterval(() => {
    // proxy set 
    counter.num1++
}, 1000);

setInterval(() => {
    // proxy set 
    counter.num2++
}, 5000);