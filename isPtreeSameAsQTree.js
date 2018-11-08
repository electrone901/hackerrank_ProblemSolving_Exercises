/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

		PSEUDO CODE:

			1- check if p & q are null return true
			2- check if one of the trees are null then break and return false
			3- check if the value p & q are not the same  then break and return false
			4- otherwise check p.left and q.left and repeat step 3
			5- otherwise check p.right and q.right and repeat step 3
			6- with recursion you don't need to return because eventually will be null and it will return true;
			7- with the interative approach you need to return at the end true;

*/

function isTheSame(p,q) {
	if(p === null && q === null) return true;
	if(p === null || q === null) return false;
	if(p.val !== q.val) return false;
	return isTheSame(p.left, q.left) && isTheSame(p.right, q.right);
}




/**
 * 
 NON RECURSIVE
 Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    let stack = [];
    stack.push({'p':p, 'q':q});
    
    while(stack.length) {
        let obj = stack.pop();
        let p = obj.p;
        let q = obj.q;
        
        if(p.val !== q.val) {
            return false;
        }
        
        if(p.left !== null && q.left !==null) {
            stack.push({'p':p.left, 'q':q.left});
        } else if(p.left !== null || q.left !==null) {
            return false;
        }
        
        if(p.right !== null && q.right !==null) {
            stack.push({'p':p.right, 'q':q.right});
        } else if(p.right !== null || q.right !==null) {
            return false;
        }   
    }
    return true;
};





