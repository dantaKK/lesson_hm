var permute = function(nums) {
    const relut=[]
     const vis=[]
    const mao=[]
    const dfs=(i)=>{
    if(i>nums.length){
        relut.push(vis)
        const vis=[]
        return
    }
    for(let j=0;j<nums.length;j++){
        if(!vis[j]){
            vis[j]=true
            dfs(i+1)
            vis[j]=false
        }
    }
}
}