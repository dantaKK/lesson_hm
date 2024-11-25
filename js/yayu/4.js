// constructor 
function Person(name,age){
    console.log(this);
    this.name=name;
    this.age=age;  
}
// 每个函数都有一个原型对象
 Person.prototype={
    eat: function(){
        console.log(`${this.name}爱吃`);
    },
    sleep: function(){
        console.log(`${this.name}爱睡`);
    }

 }
 const K =new Person('KK',18);
 K.eat();
K.sleep();
