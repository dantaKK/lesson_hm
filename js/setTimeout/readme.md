# 定时器

- JS 是单线程的，只有一个主线程
- settimeout 是异步执行的计时器，会在主线程执行完之后再执行
   callback 函数 放入 event loop， 时间（ms）
- 一定会在 指定时间后执行吗？ 
- 找回？ 
  执行回调函数（callback）
- 定时器 ID  根据ID提前终止

- 如何 setTimeout 实现 setInterval
  - 场景编程题
  - 手写题 fn
    - customInterval
    - callback , time 参数 
    - 可以用settimeout 实现 
    - 递归
    - 关闭 ？
