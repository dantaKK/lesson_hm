## 走进js，走进讶羽

- 造对象
  -对象字面量
  简单，直接，但随意且不灵活
  -es6 class
   批量造？ class Person
   new 
  -类是抽象概念 封装（方法和属性），是模板（）对象字面量好的）
  -传统面向对象思想来开发JS，es5 不支持class 关键字

- 构造函数
  -js 面向对象的任务函数担起来了
  -构造函数 首字母大写（建议！便于区分于普通函数）
  -this 指针 指向 -> 实例对象 ->new 出来的对象
   作用： 完成构造(实例化)的过程 
   new 运算符 Person() 

- 函数是不是构造函数？不是由首字母大写
  而是由new 运算符， 调用方式决定的
  - 构造函数首字母大写 其实是编程风格 一种约定 没有实际作用
  
- js 构造函数可以独立完成实例化
- 原型
  Person.Prototype.eat

- 类的方法部分由原型（prototype）完成
- 函数是对象，函数对象都有一个prototype属性

- js es5 的类的构建 = 构造函数（属性，对象） + 原型（方法，所有实例共享，性能+没有比较归对象，this可以找到对象）

- js 面向对象原型式的面向对象（设计哲学），就好像中国人以孔子为原型，不是血缘关系

- 将函数对象的prototype 设置为某对象（如：cc），
比class 更优秀
class{
    constructor(){
        this.name = 'cc'
    }
    eat(){
  
    }
}
对象可以共享原型对象上的方法 
js 原型式的面向对象 是王者

## 三者关系
- 构造函数 
- 原型对象  不像class 一样绑在一起，拆的开
- 实例对象 
