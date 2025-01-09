// http 服务启动
// 内置的http 模块
// commonjs 规范  node早期  es6 模块化 
const http = require('http');

// 启动http服务  基于请求/响应的简单协议
//req（request 请求对象）包含了所有关于客户端发出的HTTP请求的信息，例如请求的方法（GET、POST等）、URL、头信息和可能的数据载荷。
// res（response 响应对象）是用来向客户端发送响应的接口。通过这个对象可以设置响应头、状态码，并最终发送响应体。
const users=[
    {
        id:1,
        name:'张三'
    }
    ,{
        id:2,
        name:'李四'
    }
]
const server = http.createServer((req, res) =>{
          // 异步 高并发
          // 请求带到服务器后，该函数会被执行
          // req 请求对象解析
          // 拿到资源
          // res 响应对象
          // http 结束 
          res.end("callback("+JSON.stringify(users)+")")
})

server.listen(3000, () =>{
          console.log('服务启动成功')
})