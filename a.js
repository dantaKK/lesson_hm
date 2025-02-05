
var inorderTraversal = function(root) {
    const res=[]
    const inx=(root)=>{
    if(!root)
    return;
    inx(root.left)
    res.push(root.val)
    inx(root.right)
    }
    inx(root)
    return res
};
console.log( inorderTraversal([1,null,2,3]) )
