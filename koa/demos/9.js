const Koa=require('koa');
const app=new Koa();

// 计算器 基于cookie
// jwt token
// cookie 早期用于用户登录 存在浏览器
const main=function(ctx){
    const n =Number(ctx.cookies.get('view')||0)+1
    ctx.cookies.set('view',n) // 种cookie
    ctx.cookies.set('hello','wrold')
    ctx.response.body=n+'views'
}

app.use(main)
app.listen(3000)