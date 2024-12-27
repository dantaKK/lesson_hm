function Person(name,age){
    this.name = name;
    this.age = age;
  return {
    name:thi.name,
    age:this.age,
    tag:"123"
  }
}
Person.prototype.sayName=function(){
    console.log(this.name)
}

function objectFactory(fn,...args){
    console.log(arguments) // 类数组

    //    const obj=new Object() // 创建一个空对象
   const obj = {}

   //    const Construtor=arguments[0] ;
//    [].shift.call(arguments)
// 类数组没有用shift 方法，shift中的this指向东西 
//    const Constructor=[].shift.call(arguments) // 取出第一个参数
   
     
//    console.log(Constructor)
   obj.__proto__=fn.prototype // 指向构造函数的原型

   fn.apply(obj,args) // 执行构造函数 给obj赋值 用apply不用call
  const ret = fn.apply(obj,args) 
  console.log(ret)
   console.log(obj)
   
//    return obj

   return typeof ret === "object" ? ret : obj
}

let awei=objectFactory(Person,"awei",18)
awei.sayName()