const Koa = require('koa');
const websocket=require('koa-websocket');
// 基于http 协议构建webscoket 服务
const app=websocket(new Koa());
// es6 提供新的数据结构
// 数组 绝对不会重复
const clients = new Set();


app.use(async (ctx,next)=>{
    ctx.body = `
    <html>
      <body>
        <div id="messages" style="height: 300px; overflow-y: scroll;"></div>
        <input type="text" id="messageInput" />
        <button onclick="sendMessage()">发送</button>
        <script>
        const ws = new WebSocket('ws://localhost:3001');
        function sendMessage() {
           const  msg=document.getElementById('messageInput').value.trim();
           console.log(msg);
        }

        </script>
      </body>
    </html>
    `
    
})
// 处理socket 连接
// ws websocket 简写
app.ws.use(async (ctx,next)=>{
   clients.add(ctx.websocket);
   console.log('-------')
})
// http 伺服
app.listen(3001,()=>{
    console.log('server is running at port 3001')
})