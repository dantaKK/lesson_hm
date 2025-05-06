const obj = { a: 1, b: { c: 2 } };
console.log(JSON.stringify(obj));
const copy = JSON.parse(JSON.stringify(obj));
copy.b.c = 3; // 原对象不受影响
console.log(obj);
console.log(copy);  
