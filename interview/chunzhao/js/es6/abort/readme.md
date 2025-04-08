# 如何取消一个正在发送的请求

- promise 本身不能取消 它有三种状态：进行中（pending）、已成功（fulfilled）和已失败（rejected）。一旦 Promise 被创建并开始执行，它就会按照既定的逻辑持续运行，直至状态变为 fulfilled 或者 rejected。
讲了fetch 自己看 别的