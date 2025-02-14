const Koa=require('koa');
const app=new Koa();
const path=require('path') // node 内置模块
// 静态服务
const serve = require('koa-static') // 周边生态

// console.log(__dirname)  当前项目的物理路径
// 路径对象  返回路径


const main = serve(path.join(__dirname),'static')

app.use(main)
app.listen(3000)