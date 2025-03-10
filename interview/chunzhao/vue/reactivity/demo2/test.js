// JSON key 字符串 Map 可以是任何类型
// Map key 是数据对象
// WeakMap 弱对象
let obj={}

// const map = new Map(); // 键值对
const map = new WeakMap(); 
map.set('name',1)
map.set(obj,2) // 弱引用 当删了obj 时，map.set(obj,2)也会删除 

let obj2={
    obj:2
}

console.log(typeof obj2['obj'])
for(key in obj2){
    console.log(key) 
}

delete obj; // 手动删除obj 触发垃圾回收
