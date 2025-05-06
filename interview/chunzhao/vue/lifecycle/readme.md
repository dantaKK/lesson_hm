# 生命周期

- 先以vue3 为例子 
  - 三个阶段
    - 挂载前后   （onMounted onBeforeMount）
    - 更新前后 （onUpdated onBeforeUpdate）
    - 销毁前后 （onUnmounted onBeforeUnmount）
  - composition api
    - onBeaforeMounted 
    - onMounted
      发送请求 图标 swiper 幻灯片 
    - onBeaforeUpdate
    - onUpdated
      重新计算DOM 高度 llm 聊天内容高度 重新计算滚动条位置
    - onBeaforeUnmounted
      dom 节点还在 移除定时器 事件监听 取消网络请求
    - onUnmounted

    - keep alive 特有的钩子
      - onActivated 激活
      - onDeactivated 失活
      
- vue 2比vue3 多一个created 阶段 **setup 函数 可以直接定义一些数据或初始化**

  - beforeCreate 实例化前 无法访问数据和方法， 适合进行初始配置
    created 实例化后 可以访问数据和方法,适合进行数据初始化和设置
    接口请求(一般在created 中进行 除非有一些响应式数据和html挂钩)
  - beforeMount 
  - mounted
  - beforeUpdate
  - updated
  - beforeDestroy
  - destroyed
  - errorCaptured 子组件编译错误
  - activated keep alive 
  - deactivated 

- vue3 推迟到onMounted 规避SSR 副作用并保证逻辑在客户端执行

- 父子组件生命周期的理解
    - 执行顺序
    - 数据更新
    - 销毁

- react 生命周期
  useEffect
  [] 挂载
  [loading] update
  ()=>{
    unmount
  }