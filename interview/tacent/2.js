编写二叉树的前序遍历
function preorderTraversal(root) {
     if(!root) return 
     console.log(root.val)
     preorderTraversal(root.left)
     preorderTraversal(root.right)
}


// 除了递归还有迭代
// 栈 右节点先入栈，左节点后入栈 先进后出
function preOrderTraversal(root){

    if(!root) return 
    //  栈模拟递归
    var stack = []
    stack.push(root)
    while(stack.length){
        var node = stack.pop()
        console.log(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
}