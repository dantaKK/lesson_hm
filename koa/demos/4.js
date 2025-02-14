const Koa=require('koa');
const app=new Koa();


// 中间件 顺序 洋葱模型
const one=(ctx,next)=>{
    console.log('1')
    next()
    console.log('111111')
}

const two=(ctx,next)=>{
    console.log('2')
     next()
     console.log('222222')
}
const three=(ctx,next)=>{
    console.log('3')
    next()
    console.log('333333')
}
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)