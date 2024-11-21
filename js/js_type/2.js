let obj={
    name:"张三",
    job:"web",
    company:"baidu"
}
obj.hometown="北京"
// 引用式
let obj2=obj;
let a=1;
// 拷贝式
let b=a;
b=3;
obj2.name="李四"
console.log(a,b);
console.log(obj,obj2);