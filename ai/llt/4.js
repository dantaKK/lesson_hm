function generteRandomTime(){
    const date=new Date();
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    date.setSeconds(Math.floor(Math.random() * 60));// 运算符空格
    return date.toISOString();
}
 
console.log(generteRandomTime());