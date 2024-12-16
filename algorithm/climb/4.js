const coinChange= function(coins,amount){
    const f=[];// f[i]表示金额为i时，最少的硬币数 最优
    f[0]=0;//金额为0时，硬币数为0
    for(let i=1;i<=amount;i++){
        f[i]=Infinity;//初始化f[i]为无穷大
        for(let j=0;j<coins.length;j++){//枚举最后一枚硬币
            if(i-coins[j]>=0){//金额大于硬币面值
                f[i]=Math.min(f[i],f[i-coins[j]]+1);//状态转移方程
            }
    return f[amount]
}
}
}
coinChange([1,2,5],11)