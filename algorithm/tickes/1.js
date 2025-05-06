/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    // 最后一天
   const lastTravelDay = days[days.length - 1];
   // dp 数组初始化
   const dp=Array(lastTravelDay + 1).fill(0);
   const isTravelDay = Array(lastTravelDay + 1).fill(false);
   for(let day of days){
    isTravelDay[day] = true;
   }
    for(let i = 1; i <= lastTravelDay; i++){
       if(isTravelDay[i]===true){
          dp[i]=Math.min(
            dp[i-1]+costs[0],
            dp[Math.max(0,i-7)]+costs[1],
            dp[Math.max(0,i-30)]+costs[2] 
          )
       }
       else{
        dp[i]=dp[i-1]; 
       }
    }
    return dp[lastTravelDay];
};

const days = [1, 4, 6, 7, 8, 20];
const costs = [2, 7, 15];
console.log(mincostTickets(days, costs)); // Output: 11