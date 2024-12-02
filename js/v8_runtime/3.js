function bar(){
    console.log(myname);
}
function foo(){
    var myname="kk";
   
    bar();
    console.log(myname);
}
var myname="lily";
foo();