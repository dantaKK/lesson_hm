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
  
## 浏览器缓存
  缓存是性能优化的核心 
  - 强缓存
    不用发送http请求
    - Expires 过期时间 服务器和客户端可能不一致 绝对时间 http1.0
    - Cache-Control(bug 修订) max-age 过期时间 相对时间 http1.1 
      别的值
      private 只能浏览器缓存，中间的服务器(cdn)不能缓存
      no-cache 跳过当前缓存，进入协商缓存
      no-store 不缓存，直接请求服务器 适用于敏感信息
  - 协商缓存
    需要发送http请求

    强缓存失效后，浏览器在请求头中携带相应的缓存tag请求，由服务器根据这个tag来决定是否使用缓存

    - Last-Modified / If-Modified-Since  最好修改时间，服务器在响应头中加上这个字段，客户端发送If-Modified-Since,服务器端校验
    - 小于最新修改时间 返回新的资源
    - 304 使用缓存
    ETag / If-None-Match
    
    文本的唯一标识（性能开销大），内容改变了，标识就会改变 响应头发给浏览器
    浏览器 IF-None-Match 发送给服务器
    
  - 区别
    - 精确不同
      - ETag 更精
      - Last-Modified 只能精确到1秒
    - 性能不同
      lastModified 性能开销小 只记录时间
      etag 生成hash 值
     
     服务器一般用etag

  - 缓存的位置
    - Memory Cache 内存中
    - Disk Cache 磁盘
    - Service Worker    PWA Progress Web Application 离线缓存 类似于APP
      SPA 

- 浏览器的本地缓存
  - Cookie 
    开始时不是用来设计为本地存储的，而是为了弥补HTTP 在状态管理上的不足。
    HTTP 无状态，每次请求都是独立的，无法记录状态 key value
    Cookie 请求头 浏览器中存储的一个小文本 4KB
    - 容量小
    - 性能缺陷 每次请求都要带上 
    - 安全缺陷 
    httpOnly XSS 跨站脚本攻击
    Sanemite 
  - localStorage 
    - 同源策略 
    - localStorage 永久存储 不会发送给服务器
    - 容量大 5M 
    - 操作方便
      localStorage.setItem('name', 'zs')
      getItem('name')

  - sessionStorage 
    会话级别，窗口关闭，就不存在了

  - IndexedDB 
    浏览器端非关系型数据库
    - 更大容量
    - 支持复杂查询
    
## if(a==1&&a==2) 成立

   