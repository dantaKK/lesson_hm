# CSR 和 SSR

- CSR SPA
  优点
  - 用户体验好，不需要等服务器响应，不会白屏
  所有 的路由和页面(组件)都是在客户端进行解析和渲染的 Client Side Rendering
  缺点
  - 首屏加载慢
    懒加载 按需加载 
    执行组件的编译和渲染
  - 不利于 SEO 搜索引擎优化 不友好
    搜索引擎爬虫不会执行js代码，只会执行html字符串

- SSR  企业官网
  - 组件的编译和html字符串放到服务器端
  - SEO 更好
  

- @vue/server-renderer 渲染 -> html 字符串 
- vue/compiler-ssr 编译

  
