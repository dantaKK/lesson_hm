class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
const root=new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)
root.right.left=new TreeNode(6)
// console.log(root)
function levelOrderTraversal(root){
   
    if(root==null)
        return []
   const result=[]
   //  根节点入队
   //  借助队列 先进先出 FIFO 栈 LIEO
   const queue=[root]
   while(queue.length>0){
     const cuurentNode=queue.shift()
     result.push(cuurentNode.val)
     if(cuurentNode.left!=null){
        queue.push(cuurentNode.left)
     }
     if(cuurentNode.right!=null){
        queue.push(cuurentNode.right)
     }

   }
    return result 
}
console.log(levelOrderTraversal(root))
