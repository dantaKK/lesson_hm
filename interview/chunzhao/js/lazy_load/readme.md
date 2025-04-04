# 图片懒加载

- 性能优化
  页面加载速度
  http 并发数 + 首屏(所在屏)
  
- src -> data-src
  onscroll 
  节流 
  图片是否在可视区
   getBoundingClientRect()
   intersectionObserver

- v-lazy vue 中图片懒加载
  v-lazy 

- getBoundingClientRect()
  - onscroll 监听
  - 节流
  - 处理函数 立即执行函数 闭包count
  - getBoundClientRect top < window.
  innerHeight
    img.src = img.data.origin
  - count++
  - 判断下是否移除
  - imageList filter 清除
 
- IntersectionObserver
   观察者模式

- 观察者模式

  观察者模式是一种一对多依赖关系，当一个对象状态改变，依赖它的多个观察者会收到通知并自动更新。

  区别：观察者模式中观察者与被观察**对象**直接交互；订阅发布模式有中间调度中心，发布者和订阅者通过它**间接**通信。

- vue 图片懒加载的时候？
  - 不能做dom
  - <img v-lazy />
  v-lay 自定义指令