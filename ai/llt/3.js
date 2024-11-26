// 生一个18到55岁的随机年龄
function getRandomAge() {
    return Math.floor(Math.random() * (55-18+1))+18;
}
console.log(getRandomAge());