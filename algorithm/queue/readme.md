# 队列

- 何为队列？
  FIFO 的线性数据结构

- 受限
  push
  shift
  unshift 队首插队
  pop

- 封装
  - 复用
  - 难点和不想别人动(禁区)的点 私有变量 
  多人一起coding 的大场面
  
- 使用es6 封装 队列， 容量为capacity， 动态扩容 ？

- 为了支持capacity 
  #front
  new Array(capacity) ?  // 内存分配连续
  this.size
  可以更好地利用CPU缓存
  
  容量好处？
  数组 内存地址 1000-1019 CPU 访问下标0 时，CPU就可以将1000-1019 这一段连续内存加载到**缓存**中，

- 用数组实现队列 更快
  容量到达后 来一次O(n) 平均下来更优
- 链表实现队列 执行速度是一样的
  