// function bar(){
//     console.log(myname);
// }
function foo(){
    var myname="x";
    function bar(){
        console.log(myname);
    }
    bar();
    console.log(myname);
}
var myname="lily";
foo();