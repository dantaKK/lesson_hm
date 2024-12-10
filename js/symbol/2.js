let name ="xbk"

const classmates={
    // 字符串 同名 覆盖 
    "cy":1,
    "cy":2,
    [name]:"猛男",
    // symbol 可以代替 字符串作为key
    [Symbol('Mark')]:{grade:50,age:10},
    [Symbol('olivia')]:{ grade:60,age:18},
    [Symbol('olivia')]:{ grade:60,age:18}
}
//    console.log(Object.keys(classmates))
//    console.log(Object.values(classmates))
//    console.log(  Object.entries(classmates))

    console.log(Object.getOwnPropertySymbols(classmates))
    console.log(Object.getOwnPropertyDescriptors(classmates))