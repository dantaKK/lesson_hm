// 基本数据类型间的显示类型转换之Number
// Number
console.log(Number()) // 默认值为0
// NaN undefined 数值上下文中没有转成一个特定数字的含义
console.log(Number(undefined)) // NaN
console.log(Number(null))   // 0
console.log(Number(false))   
console.log(Number(true))
console.log(Number(NaN))
console.log(Number('123'))
console.log(Number('-123'))
// 16进制
console.log(Number('0x11'))  
console.log(Number(''),Number(' '))
console.log(Number('100a')) 
