# 事件循环

JavaScript 的事件循环（event loop）是一种机制，它负责执行异步代码并管理调用栈与任务队列之间的交互，确保异步操作如定时器、 promises 和 I/O 操作能够在适当的时候被执行。简而言之，事件循环使得 JavaScript 能够处理并发操作，而无需多线程。

- 事件
   - 宏任务
     script setTimeout setInterval requstAnimation setImmediate I/O setImmediate 队列 FIFO
   - 微任务
     promise 队列 FIFO
- 循环
  同步任务 清空执行栈 -> 微任务队列(一次清空) ->页面渲染 ->宏任务队列(一次调一个) -> 进入idle 
  之后一直循环
- 机制
   同步任务单线程 任务执行顺序(异步) 

- script 本身是一个宏任务 
- 函数入栈 
- async await 的本质是 promise 语法糖   微任务
- 执行栈要先清空(同步)
- promise 的excute 是同步代码 立即执行
- then 会放入微任务

- 非阻塞式 不会被耗时性任务阻塞，遇到耗时性任务会放到宏任务队列中，等待执行栈清空后再执行，等“通知”
微任务相当于插队宏任务，紧急的插入
每一个宏任务都有一个自己的微任务队列