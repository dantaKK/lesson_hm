## arrow
箭头函数是 ES6 引入的语法糖,箭头函数没有自己的 this，它的 this 值继承自定义时的外层作用域（词法作用域）。

例子：
function Timer() {
  this.seconds = 0;

  // 普通函数：this 取决于调用方式（如定时器中是 window/undefined）
  setInterval(function() {
    this.seconds++; // ❌ this 指向全局对象或 undefined（严格模式）
  }, 1000);

  // 箭头函数：this 继承自 Timer 的实例
  setInterval(() => {
    this.seconds++; // ✅ 正确指向实例的 seconds
  }, 1000);
}