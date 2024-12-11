 // 动态规划
    // 算法里非常牛逼的一种，神来之笔
    // - 得到达到某个目的的解法个数
    // - 不关心具体的过程
 // - 动态规划自底向上 解决问题 迭代
//  - 适合用动态规划 最终值 最优解 dp
// - 先递归 找到大问题，子问题的关系 -> 状态转移方程
//   最优子结构
    const climbStairs = function(n){
        // 1.定义状态
        const dp = []  //f[i]最后结果 
        // 2.初始化状态
        dp[1] = 1
        dp[2] = 2
        //　迭代
        // 3.状态转移
        for(let i = 3; i <= n; i++){
            dp[i] = dp[i-1] + dp[i-2]
        }
        return dp[n]
    }
    console.time("climb")
console.log(climbStairs(50))
console.timeEnd("climb")