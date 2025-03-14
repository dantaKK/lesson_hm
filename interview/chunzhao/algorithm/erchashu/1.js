/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root===null||root===p||root===q)
    return root
    // 树 想想递归
    const left = lowestCommonAncestor(root.left,p,q);
     const right = lowestCommonAncestor(root.right,p,q)
    //  左右都有值 说明当前节点就是最近公共祖先
     if(left!=null&&right!=null)
     return root
    return left !=null ? left : right;
};