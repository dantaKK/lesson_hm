// 和普通函数的区别在哪？
// 构造对象的过程 构造函数 constructor 
function Person(name,age){
    this.name=name;
    this.age=age;
}

const wen=new Person('雯',18);
console.log(wen.age,wen.name);
const zhang=new Person('张',18);
console.log(zhang.age,zhang.name);