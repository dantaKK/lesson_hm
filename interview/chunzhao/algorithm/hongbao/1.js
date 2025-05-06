function hongbao(total, num) {
    const arr = [];
    let restAmount = total; // 剩余金额初始化
    let restNum = num; // 剩余人数
    for (let i = 0; i < num - 1; i++) {
        // 计算当前份额，使用Math.random()生成一个0到(2*restAmount/restNum)之间的随机数
        // 注意这里乘以2是因为希望平均值能接近于剩余人均值
        let amount = parseFloat((Math.random() * restAmount / restNum * 2).toFixed(2));
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    // 将剩余的金额全部分配给最后一个人，并保留两位小数
    arr.push(restAmount.toFixed(2));

    return arr;
}

console.log(hongbao(100, 10)); // 示例调用