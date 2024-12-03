"use strict"
// 取消严格模式
var x=2;

var obj={
    x:1,
    foo: function(){
        console.log(this)
        console.log(this.x)
    } // 有自己的一块空间
}

// 函数体
var foo=obj.foo;
// 相同点是：同一个函数在运行
// 区别呢？ 被谁调用，调用的位置不一样
// 调用时候？调用方式不一样

obj.foo() //1
// 对象的方法被调用

foo()  //2  没有什么必要的
// 普通函数被调用 

var obj2={
    x:5,
    foo:foo
}
obj2.foo() //5