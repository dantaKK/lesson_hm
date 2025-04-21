let res = new Array()
for(var i=0;i<10;i++)
{
    res.push(function(){
        return console.log(i)
    })
}

// 方法1
// for(let i=0;i<10;i++)
//     {
//         res.push(function(){
//             return console.log(i)
//         })
//     }

// 方法2
// for(var i=0;i<10;i++)
//     {
//         (function(i){
//             res.push(function(){
//                 return console.log(i)
//             })
//         })(i)
       
//     }

// 方法3
// for(var i=0;i<10;i++)
//     {
//         res.push(console.log.bind(null,i))
//     }
res[0]()
res[1]()
res[2]()