const MinStack = function () {
  this.stack = []; // 原栈
  this.min_stack = []; // 辅助栈

};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // 为什么要等于呢？ 出栈的时候会用到
  if (this.min_stack.length === 0 || this.min_stack[this.min_stack.length - 1] >= x) {
    this.min_stack.push(x);
  }

};
MinStack.prototype.pop = function () {
  if (this.stack.pop() === this.min_stack[this.min_stack.length - 1]) {
    this.min_stack.pop();
  }
}

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
  }