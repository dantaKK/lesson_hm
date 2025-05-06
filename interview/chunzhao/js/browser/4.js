'1'.toString() 
// 包装类 

// 给了一个临时使用权
// var s= new String('1')

// es6 之后 Symbol bigint 
var s=new Object('1')
// console.log(typeof s,typeof '1')
s.toString()
s=null   // 销毁 