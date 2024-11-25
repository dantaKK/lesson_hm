const cc={
    name:"cc",
    palyBasketball:function(){
        console.log(`${this.name}打篮球`);
    },
    palypingpang:function(){
        console.log(`${this.name}打乒乓`);
    }
}

function Person(name,age){
    console.log(this);
    this.name=name;
    this.age=age;
}

// 原型？ 
Person.prototype=cc;
const wu=new Person('武',20);
wu.palyBasketball();
wu.palypingpang();

// 为什么可以调用原型上的方法？
console.log(wu.__proto__==cc);