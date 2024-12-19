console.log(1/0+0) // Infinity 正无穷
console.log(1/-0) // -Infinity 负无穷
console.log(Object.is(5,5)) 
console.log(Object.is(+0,-0))
// 隐式转换
// NaN Not a Number -> 
console.log(1*'a',1 + 'a')
console.log(typeof NaN)
console.log( NaN+5)
console.log(parseInt('123'))
console.log(parseInt('aaa'))
console.log(parseInt('12aaa3'))
console.log(NaN === NaN)  // false NaN 不代表确切值
// 不能通过===NaN来判断是否是NaN 所以会有isNaN
console.log(isNaN(NaN),isNaN(parseInt('aaa'))) // true
