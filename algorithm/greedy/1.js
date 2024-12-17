// - 贪心策略
// - 局部最优解
// - 全局最优解
function coinChangeGreedy(coins,amt){
     let i = coins.length-1;
     let cout=0
    
     while(amt>0){ // 还要找零
        // 假设coins 是有序的 升序
         while(i>0 && coins[i]>amt){
             i--;
         }
         cout++;
         amt -= coins[i];
     }
     return amt === 0 ? cout : -1;
}
// 某种组合是适合贪心的
 console.log(coinChangeGreedy([1,,5,10,20,50,100],131))
 // 贪心策略不适合某些数组
 // coinChangeGreedy([1,20,50],60)