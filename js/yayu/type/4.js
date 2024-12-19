// 基本数据类型间的显示类型转换之Number
// Number
console.log(Number()) // 默认值为0
// NaN undefined 数值上下文中没有转成一个特定数字的含义
console.log(Number(undefined)) // NaN
console.log(Number(null))   // 0
console.log(Number(false))   // 0
console.log(Number(true))   // 1
console.log(Number(NaN)) // NaN
console.log(Number('123'))  // 123
console.log(Number('-123')) // -123
// 16进制
console.log(Number('0x11'))  // 17
console.log(Number(''),Number(' ')) // 0 0
console.log(Number('100a')) // NaN
