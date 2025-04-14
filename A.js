function A() {
    for(var i = 0; i < 13; i++) {
    setTimeout(() => {
        console.log(i) 
    },1)
    }

    // 闭包
    // for (var i = 0; i < 3; i++) {
    //     (function(i) {
    //         setTimeout(() => console.log(i), 1);
    //     })(i);
    // }

    // let 
    // for (let i = 0; i < 3; i++) {
    //     setTimeout(() => console.log(i), 1);
    // }

    //forEach方法
    // [1,2,3,4].forEach((i) => {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 1);
    // });


    // 异步
    // async function delayedLog(i) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             console.log(i);
    //             resolve();
    //         }, 1);
    //     });
    // }
    
    // async function loop() {
    //     for (let i = 0; i < 3; i++) {
    //         await delayedLog(i);
    //     }
    // }
    
    // loop();
}
A()

// const obj={a:1}
// obj.b=2;
// console.log(obj)