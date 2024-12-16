var a={
    name:"zhangsan",
   
    fn:function(a,b){
        console.log(this.name);
        console.log(a+b);
    }
}
var b=a.fn;

 b.call(a,[1,2],'xxx')