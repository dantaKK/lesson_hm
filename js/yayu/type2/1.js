var a=1.23
console.log(typeof a);// Number
var b= new Number(a)
console.log(typeof b);// Object
b.toFixed(1) // 1.2
// 面向对象极致风格 toFixed(a)函数式 
a.toFixed(1) // 1.2  从面向对象是不行的 包装类 =>(new Number(a)).toFixed(1) 
// 依然还是 Number 简单数据类型 

