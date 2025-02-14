# koa

node 后端简单开发框架

- 中间件
  核心 洋葱模型
  - 从外到内
  - 从内到外
  next 
- 路由
- api json ctx
  上下文 ctx=request + response
- async / await

- 建立http server

- 后端的基础
  - node 1.js 会从硬盘中读取1.js到内存
  - 分配变量和执行
  - fs.createReadStream() 去硬盘中读取文件
  
- 场景
  - redirect 重定向
  301 302 307

- 错误处理中间件
  - 后端注意健壮性，稳定
  - 出错了，直接报错，node单线程就会挂掉，这个是灾难，后面的用户没有办法访问
  - 洋葱模型和 try catch 
  - 记录下log,方便排查
   - userAgent 记录 大数据分析 
  
- cookie http 1.0 时代
  Cookie是存储在用户浏览器中的一小段数据(Kb，字符串 view=7)，用于保存状态信息（如登录状态、偏好设置等），以便网站在用户访问期间或下次访问时识别用户并提供个性化服务。
  'view=12;hellow=world;'
  - 浏览器会自动把cookie 发送给服务器 自动
  - cookie 在前端/后端都可以操作 自动发送
  localStorage