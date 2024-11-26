// 代码可读性
function generteRandomGender(){
// return Math.random()>0.5?'male':'female';
const genders=['male','female'];
return genders[Math.floor(Math.random()*genders.length)];
}
console.log(generteRandomGender());