// 两端不是数字， + 连接符号

// 二元运算符
console.log([]+[])

// 一元运算符 隐式类型转换
console.log(+[1,2,3])
// 代表着不同的空间 内存地址不同
console.log([]==[]) //  false

let x =42
let y={
    valueOf:function(){
        return 42
    }

}

console.log(x==y) // true
