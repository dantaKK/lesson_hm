// 实例化，传递函数，里面装耗时性任务

const p=new Promise((resolve,reject)=>{

    // executor 执行器
    console.log('333') // 同步任务
    setTimeout(()=>{ // 异步任务 event loop
    console.log('222')
    resolve()
    },1000)
})
// 异步任务的执行顺序控制的话 用promise
p
.then(()=>{
    // 等到excutor 异步任务执行完了 才会执行then里面的函数
    console.log('111')
    console.log(p)
})

console.log(p.__proto__,p)