console.log(Boolean(new Boolean(false))) // 虽然对像中值是false
console.log(Boolean(new Boolean({})))
console.log(Boolean(new Boolean([])))
// 有对象即为true 
console.log(typeof(Boolean(new Boolean(false)))) 