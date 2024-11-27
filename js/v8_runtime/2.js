
function foo(){
    var a=1;
    let b=2;
    {
        let b=3;
        var c=4;// 不支持块级作用域
        let d=5;
        console.log(a);
        console.log(b);
    }//运行完销户
    console.log(b);
    console.log(c);
    console.log(d);
}
foo();