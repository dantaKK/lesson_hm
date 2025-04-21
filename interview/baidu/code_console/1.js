var a = 1;
function fn1() {
    function fn2() {
        console.log(a); 
    }
    function fn3() {
        var a = 4;
        fn2();
    }
    var a = 2;
    return fn3;
}
var fn = fn1();
fn(); 