// 递归 js api -> 算法思想
function reverseWords(str) {
   if(str===''){
       return ""
   }
   else{   
    return reverseWords(str.substr(1))+str.charAt(0)
   }
}
// 
console.log(reverseWords('hello'))