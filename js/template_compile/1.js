function compile(template, data) {
    // 正则一个个字符匹配  1  第一个字符
    // [0-9] 匹配的范围 一个字符 0-9 任何一个数字 [] 一个 0-9 -  范围
    // 从字符串的开始匹配

    const reg = /\{\{(\w+)\}\}/g;

    // 使用 replace 方法遍历所有匹配项
    //这是与整个正则表达式相匹配的子字符串。
    // 如果正则表达式中包含捕获组（即用圆括号()包围的部分），那么path将代表第一个捕获组所匹配的文本。
    // match 和 path 参数是由replace方法基于正则表达式的匹配结果自动生成并传递给回调函数的。
    return template.replace(reg, (match, path) => {
        console.log(match, path);
        return path in data ? data[path] : '';
    }
    );

}

let template = '我是{{name}}, 年龄{{age}}，性别{{sex}}'
let person = {
  name: '张三',
  age: 18,
  sex: '男'
}
 console.log( compile(template, person))