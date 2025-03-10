const Koa=require('koa')
const app=new Koa()

// 数组
const handler=async(ctx,next)=>{
 try{
  await next()
  
 }catch(err){
  ctx.status=500||err.status||err.statusCode;
  ctx.response.type='html' // 响应头
  ctx.response.body='<p>Something is wrong</p>'
  ctx.app.emit('error',err,ctx) // vue 子 向 父 汇报
 }
//   ctx.body={
//    message:err.message
//   }
}
app.on('error',function(err){
    console.log('logging error',err.message)
    console.log(err)
})

const main =async (ctx,next)=>{
 ctx.throw(500);//抛出一个错误
 await next()
}

app.use(handler) //挂载  放下面时有人兜底 错误处理中间件
app.use(main)
app.listen(3000)