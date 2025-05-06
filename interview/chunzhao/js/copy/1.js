// // const obj = { a: 1, b: { c: 2 } };
// //     const copy = Object.assign({}, obj);
// //     copy.b.c = 3; // 原对象 obj.b.c 也会变为 3
// //     console.log(obj.b.c); // 输出 3
// //     console.log(copy); 


// const obj = { a: 1, b: { c: 2 } };
// const copy = { ...obj };
// copy.b.c = 3; // 原对象 obj.b.c 也会变为 3
// // console.log(obj.b.c); // 输出 3
// console.log(copy);

const arr = [1, { a: 2 }];
const copyArr = arr.slice();
copyArr[1].a = 3; // 原数组的 { a: 2 } 也会变为 { a: 3 }
console.log(arr); 