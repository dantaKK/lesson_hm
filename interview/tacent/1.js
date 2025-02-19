// 字符大写
var toUpperCase = function(x) {
    return x.toUpperCase();
}

var toLowerCase = function(x) {
    return x.toLowerCase();
}
// 字符拼接
var hellow = function(x) {
    return "Hello World!"+x;
}

// // 组合toUpperCase和hellow -> greet
// // 高阶函数
// var greet = function(x) {
//     return hellow(toUpperCase(x));
// }
//  具体
var greet2=function(x){
    return hellow(toLowerCase(x));
}

// 组合抽象函数 C=A(B(x))


// console.log(greet('kevin'))
//  手写compose 组合函数
// var compose = function(f,g) {
//     // 闭包
//     return function(x) {
//         return f(g(x));
//     }
// }
var compose = function() {
    var args = arguments;
    var start = args.length-1; // 最先运行的函数 最右边的函数
    return function(x) {
        var i=start;
        var result = args[start].call(this,x);
        console.log(this);
        while(i--) {
            result = args[i].call(this,result);
        }
            return result
    }
}
var greet = compose(hellow,toUpperCase);
console.log(greet('kevin'));
//  this 的作用
// 
