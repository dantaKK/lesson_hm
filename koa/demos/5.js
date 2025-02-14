const Koa=require('koa');
const app=new Koa();
const fs=require('fs')
const fsPromise=fs.promises // fs 异步 promisify 

const main=async ctx=>{
    ctx.response.type='html'
    // 回调函数来解决异步
    console.log(fs.readFile('./index.html',()=>{
        
    }))
    console.log(fsPromise.readFile('./index.html'))
    ctx.response.body=await fsPromise.readFile('./index.html')
}

app.use(main)
app.listen(3000)