
function fun2(x,n) {
    if(n==0)
        return 1
  
        return x*fun2(x,n-1)
    
    };
  console.log( fun2(2,3))