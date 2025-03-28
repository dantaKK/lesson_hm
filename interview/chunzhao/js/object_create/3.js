// 创建对象 Object.assign
const target ={ a:1,b:2}
const source ={ b:4,c:5}

// 合并对象
const result2= Object.assign({},target,source)
console.log(target,source,result2)



const result1 = Object.assign(target,source)
console.log(result1,target)


console.log(result1.__proto__,target)
console.log(target.__proto__)