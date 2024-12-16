var a={
    name:"zhangsan",
    fn:function(a,c){
        console.log(this.name);
        console.log(a+c);
    }
}

var b=a.fn;

 console.log(bind(a,1,2))  // 返回新的函数，但是不立即执行， 酷似call() 