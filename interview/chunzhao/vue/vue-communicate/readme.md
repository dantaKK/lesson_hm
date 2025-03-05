# 组件通信
给面试官挖坑
vue2/vue3 语法区别?
组合式和选项式的区别？
设计模式 
vue3 8 种 vue2 12种

- 父子组件通信
  - props defineProps 
    两种写法 选项式 组合式 引导问 组合式的优势 逻辑好维护
    setup方法 (选项式) data里的状态， setup 返回的响应式数据都可以作为绑定props传给子组件
    setup 语法糖(组合式)
    数据绑定传参-> defineProps() (类型 默认值 是否必填) -> 编译器宏(defineProps无需引入) vue3.2版本引入
- emit defineEmits 兄弟组件通信
    **单向数据流** 兄弟组件状态共享 数组状态由父组件控制，父组件通过props传递给子组件，子组件通过emit触发事件，父组件通过自定义事件来更新状态
- expose defineExpose  
  子组件暴露给父组件的方法和熟悉
- attrs
- v-model
- 跨层级组件通信 公同的祖先节点
  provide/inject
- 全局共享状态通信 vuex/pinia
- 事件总线 eventbus 订阅发布者

  