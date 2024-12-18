console.log( ({a:1}).toString())
console.log( Object.prototype.toString.call({a:1}))
console.log( Object.prototype.toString.call([1,2]))
console.log(String({a:1})) // toString 方法
console.log(String([1,2]))
console.log(Array.prototype.toString.call([1,2]))
// Array.prototype._proto_.constructor

console.log( typeof(({a:1}).toString())) // 转成功了，不满意
console.log( JSON.stringify({a:1}))

console.log( function(){var a=1 }.toString())
// function().prototype.toString()

console.log( String(new Date(2024,12,18)))