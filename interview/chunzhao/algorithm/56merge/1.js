var merge = function (intervals){
    // 先排序   
    intervals.sort((a,b)=>a[0]-b[0])

    const res=[];
    for(const interval of intervals)
    {
        if(res.length===0 || res[res.length-1][1]<interval[0]){
            // 新区间
            res.push(interval)
        }else{
             res[res.length-1][1]=Math.max( res[res.length-1][1],interval[1])
        }

    }
    return res;
}
console.log( merge([[1,3],[2,6],[8,10],[15,18]]))