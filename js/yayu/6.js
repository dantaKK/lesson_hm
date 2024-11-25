function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.name='孔夫子'
Person.prototype.hometown='山东'
let person1=new Person('xxx',20);
let person2=new Person();
console.log(person1===person2);
console.log(person1.name,person1.hometown);
console.log(person2.name,person2.hometown);
