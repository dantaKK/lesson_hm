console.log(1+'1') // 11 优先字符串
console.log(+'1') // 
console.log(+[]) //
console.log(+'') //console.log(Number('')) 

console.log(+['1'])
console.log(+['1,2,3'])

console.log(+{}) // NaN  {}=>{} => [Object object] => NaN

console.log({}+[]) //   [object Object]
console.log({}+{}) //   [object Object][object Object]
console.log(43==['42']) // true
console.log(1=='1') 
console.log(true=='2') // false

console.log(1=='2') 