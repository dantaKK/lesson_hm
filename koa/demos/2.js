const koa = require('koa')
const route = require('koa-route')
const app = new koa()

// 中间件本质是函数
// const main = ctx => {
//     // 如果不是首页
//   if(ctx.request.path !== '/'){
//     ctx.response.type = 'html'
//     ctx.response.body = '<a href="/">IndexPage</a>'
//   }
//   else{
//     ctx.response.body = '<h1>404</h1>'
//   }
// }
const main=ctx=>{
  ctx.response.body='123'
}

const about=ctx=>{
    ctx.response.type='html'
  ctx.response.body='<a href="/">IndexPage</a>'
}
app.use(route.get('/',main))
app.use(route.get('/about',about))
app.listen(3000)
