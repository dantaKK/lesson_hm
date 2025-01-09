

let template='我是{{name}}，年龄{{age}}，性别{{sex}}'
let person={
    name:'张三',
    age:18,
    sex:'男'
}

function compile(template,data){

const reg=/\{\{(\w+)\}\}/

console.log(template.match(reg))
console.log(reg.exec(template))
const key =reg.exec(template)[1]
let value=data[key]
console.log(value)  // 张三

// // 正则替换 {{name}} -> value 
// console.log(template.replace(reg,value))
// // console.log(reg.exec(template))


}
 compile(template,person)
