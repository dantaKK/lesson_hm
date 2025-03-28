function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.sayName=function(){
    console.log(this.name)
}

function objectFactory(){
    console.log(arguments) // 类数组
   const obj=new Object() // 创建一个空对象
//    const Construtor=arguments[0] ;
//    [].shift.call(arguments)
// 类数组没有用shift 方法，shift中的this指向东西 
   const Constructor=[].shift.call(arguments) // 取出第一个参数
   Constructor.apply(obj,arguments) // 执行构造函数 给obj赋值 用apply不用call
   console.log(obj)
   obj.__proto__=Constructor.prototype // 指向构造函数的原型
   
   return obj
}

let awei=objectFactory(Person,"awei",18)
awei.sayName()


function mynews(Constructor,...args){
    if(typeof Constructor !=='function')
        throw new TypeError('c')
    const obj = Object.create(Constructor.prototype)
    const ret = Constructor.apply(obj,args);
    return 
}