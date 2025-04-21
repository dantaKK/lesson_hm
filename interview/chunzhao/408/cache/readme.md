# 浏览器缓存

- 二进制流传输
  - fs.createReadStream() 可读流
  - pipe 管道
  - res 流向res -> req client
  
- url 输入到看到页面
  - 域名解析
    dns 缓存
  - tcp/ip
    三次握手
  - http 请求
    请求行 GET / 
  - cdn 服务器(静态资源)
    静态资源 缓存
    响应速度
  - ngnix(俄罗斯) 
  - 负载均衡
    算法 轮询 返回不忙的服务器

    - 方向代理
      http://localhost:8080
      ww.baidu.com:8080 ? 
      ww.baidu.com:80 默认的服务器端口
      :80 -> ngnix 配置 代理到8080
  - server(硬件) 响应
   :8080 -> web 服务器(node/java)
   mvc 
- html 结构到达浏览器
  - - http2.0 server push
  - DOM Tree + CSSOM Tree -> Render Tree + Layout + Paint -> 图层(z-index transform 重绘)
  - link img script
- dns 预解析
- 如果之前访问过的静态资源，可以使用浏览器本地缓存
  - 强缓存
    响应头 Expires 到达之前，直接使用浏览器本地缓存
    memory cache -> disk cache , 如果过期了，就会重新发起请求
    缺点？用户的时钟 不准 绝对时间
    - 相对时间 
    Cache-Control: max-age=3600, s-maxage=3600
   - 协商缓存
    - 假如强缓存没有命中或者过期
    - 如果文件没有改变，服务器会返回304 Not Modified 
    - 请求头和响应头
      Last-Modified (文件修改时间) 服务器端
      If-Modified-Since (文件修改时间) 浏览器端
      服务器端时间不靠谱，分布式 
      MD5 计算 
      Etag (文件内容hash) 响应头
      ETag (文件的唯一标识) 
      If-None-Match (文件的唯一标识) 
- 使用浏览器的下载线程 /tom.png
