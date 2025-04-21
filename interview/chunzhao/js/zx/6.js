function fn(){
    return 20
}
console.log(fn+10)
console.log(fn()+10)
console.log(fn)

fn.toString=function(){
   return 10; 
}
fn.valueOf=function(){
    return 5; 
}
console.log(fn+10)