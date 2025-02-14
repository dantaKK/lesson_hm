const Koa=require('koa');
const app=new Koa();
const route=require('koa-route')

const redirect=ctx=>{
    // 302 重定向
    ctx.response.redirect('/') 
}
const main=ctx=>{
  
    // ctx.response.body='hello world'
    // 抛出一个错误
    // ctx.throw(500);
    ctx.status=404;
    ctx.body='Page Not Found'


}
app.use(route.get('/',main))
app.use(route.get('/redirect',redirect))

app.listen(3000)