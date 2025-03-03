function reverseStr(str){
    // 类型
    if(typeof str !== 'string'){
        return;
    }
    // 字符数组
    return str.split('').reverse().join('')
}