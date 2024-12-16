function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.sayName=function(){
    console.log(this.name)
}
// new 实例化运算法
// 1.创建一个空对象 {} 和Person 没有血缘关系
// {} __proto__ Object.prototype
// 2.将空对象的__proto__指向Person.prototype
// 3.构造函数 this 指向 {}执行，给{} 赋值
// 
const awei=new Person("awei",18)
awei.sayName()