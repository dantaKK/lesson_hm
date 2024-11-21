let a=null; // 栈内存
console.log(a); 

// 堆内存
let largeObject={
    data: new Array(1000000).fill('a')
}
largeObject=null; // 释放堆中的内存 垃圾回收 // 哲学 // 不存在的对象
