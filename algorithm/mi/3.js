function fun3(x,n){
   if(n==0)
       return 1
    // 自顶向下
   let t=fun3(x,Math.floor(n/2))
   if(n%2==0)
       return t*t // 偶数 t^2
   else
       return t*t*x // 奇数 t^2*x
}