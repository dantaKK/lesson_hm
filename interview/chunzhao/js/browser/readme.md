# js 与浏览器相关常考题

- 图片懒加载  兼容性最好
  - clientHieght + scrollTop + offsetTop
    clientHeight: 可视区域高度
    scrollTop: 滚动条距离顶部的距离
    offsetTop: 元素距离顶部的距离
  - 图片占位图
  <img src='' data-src="" >
  - scroll 事件判断图片是否到达视口
  - 节流
- getBoundingClientRect() 可以获取元素的位置与可视野口的位置
  比上个方案，在视窗比较这块更直接方便
- IntersectionObserver 可以监听元素是否进入可视区域 HTML5 API
  实现了监听window的scroll事件，判断是否在视口中，以及节流三大功能
  比上个方案，在监听元素比较多的情况下，性能更好
  - MutationObserver 改变 DOM 树的监听 style innerHTML child
  - ResizeObserver 监听元素的大小变化