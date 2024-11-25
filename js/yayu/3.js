// 一定是构造函数吗？ 不一定
function Person(name,age){
    console.log(this);
    this.name=name;
    this.age=age;  
}
Person('昌',19)// 普通函数运行 this 指向 window
const dys=new Person('昌',19);// 构造函数运行 this 指向 实例化的对象 dys
const dyf=new Person('威',20);//  
