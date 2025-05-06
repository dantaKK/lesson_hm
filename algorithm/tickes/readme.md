dp[i] dp[365] 某一天的最小花销
状态转移方程? 
dp[i] = min(dp[i-1]+costs[0], dp[i-7]+costs[1], dp[i-30]+costs[2])
迭代的顺序

