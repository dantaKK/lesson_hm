const obj = {
    value: 42,
    getValue:  () => this.value // ❌ this 指向外层（如 window）
  };

  console.log(obj.getValue()); // 输出 undefined（在浏览器中）

//   const obj = {
//     value: 42,
//     // 使用普通函数，确保 this 指向 obj
//     getValue: function() {
//         return this.value;
//     }
// };