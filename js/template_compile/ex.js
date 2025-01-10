

let template='我是{{name}}，年龄{{age}}，性别{{sex}}'
let person={
    name:'张三',
    age:18,
    sex:'男'
}

function compile(template,data){

const reg=/\{\{(\w+)\}\}/

while(reg.test(template)){
    let key = reg.exec(template)[1];      // 第二项是分组匹配的内容
    let value = data[key];
    template = template.replace(reg,value);  // 更新
  }
  return template;

}
console.log(compile(template,person))


