import {
    createApp,
    h
} from 'vue'
// 虚拟DOM 是现代前端框架的核心概念
// 它是一个轻量级的JavaScript对象，用于描述真实DOM的结构和属性
const vnode =h('div',{id:'app'},'hello world')
createApp({
    render() {
        return vnode
    }
}).mount('#app')