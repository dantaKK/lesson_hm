var str="abc345efgabcab"
// 一个一个字符匹配
str.replace(/[abc]/g,"")
// 去掉字符串中的 a、b、c 字符 `34fefg`
console.log(str.replace(/[abc]/g,""))