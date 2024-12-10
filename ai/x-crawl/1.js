const obj = { name: "过总", age: 18, hobbies: ["下棋", "喝酒", "交友"]}
let {name, age } = obj
let { hobbies } = obj
let [competion, ...likes] = hobbies

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // 输出: 6
  console.log(sum(1, 2, 3, 4, 5)); // 输出: 15

  function higherOrderFunction(callback, ...args) {
    callback(...args);
  }
  
  higherOrderFunction((a, b, c) => console.log(a, b, c), 1, 2, 3);
  // 输出: 1 2 3