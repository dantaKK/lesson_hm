// async 异步 sync 同步 函数内部可以使用await 异步变同步
// 函数修饰符
// 生成器函数 抽象
// 代码的编写顺序和执行顺序是一样
function *numberGenerator() {
    yield "1";
    yield "2";
    yield "3";

}

// 生成器函数执行 得到 生成器对象
// 可迭代 iterator 
const gen = numberGenerator();

// 生成器的状态
console.log(gen.next()); // {value: "1", done: false}
console.log(gen.next()); // {value: "2", done: false}
console.log(gen.next()); // {value: "3", done: false}
console.log(gen.next()); // {value: undefined, done: true}