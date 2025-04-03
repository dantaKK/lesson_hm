// 独立的线程
// 不共享主线程的上下文
// 不可以访问dom
self.onmessage = function (e) {
   console.log(e.data,"1")
// ....
   self.postMessage("我是子线程")
}