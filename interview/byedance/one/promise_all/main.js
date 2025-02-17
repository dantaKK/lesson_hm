const fs = require('fs');
const res=[];
// 多个异步任务同步化的解决方案
// 1. 回调地狱 麻烦 可读性极具降低
// 包袱可以抖出来
// fs.readFile('./a.txt',(err,data)=>{
//     // node 后端的哲学，容错第一
//     // 方方面面
//     if(err){
//         return console.log(err);
//     }
//     // 回调函数 最早的异步解决方案
//     // 二进制流 Buffer
//    console.log(data.toString());
//    console.log(data);
//    res.push(data.toString());
//    // a.txt -> b.tex
//    fs.readFile('./b.txt',(err,data)=>{
//        if(err){
//            return console.log(err);
//        }
//        res.push(data.toString()); 
   
//    fs.readFile('./c.txt',(err,data)=>{
//        if(err){
//            return console.log(err);
//         }
//         res.push(data.toString()); 
//         console.log(res);
//    })
//  })
// })

// es6  promise 优于回调的异步解决方案 
const readFilePrpomise = (url)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(url,(err,data)=>{
            if(err){
                reject(err);
            return;
            }
            resolve(data.toString());
        })
    })
}

readFilePrpomise('./a.txt')
.then((data)=>{
    res.push(data);
    return readFilePrpomise('./b.txt'); // 链式调用 返回一个promise
})
.then((data)=>{
    res.push(data); 
    return readFilePrpomise('./c.txt');
})
.then((data)=>{
    res.push(data);
    // console.log(res); 
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("finally",res);
})

// es8 async await 
(async()=>{
    const a = await readFilePrpomise('./a.txt');
    res.push(a);
    const b = await readFilePrpomise('./b.txt');
    res.push(b);
    const c = await readFilePrpomise('./c.txt');
    res.push(c);
    console.log(res);
})() 