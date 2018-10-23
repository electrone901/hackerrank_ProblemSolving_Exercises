/*
Given the root node of a binary tree, determine if it is a binary search tree.

Function Description

Complete the function checkBST in the editor below. It must return a boolean denoting whether or 
not the binary tree is a binary search tree.

checkBST has the following parameter(s):

root: a reference to the root node of a tree to test
Input Format

You are not responsible for reading any input from stdin. Hidden code stubs will assemble a binary 
tree and pass its root node to your function as an argument.

PSEUDO CODE:
 - make a function  check:
 	check(root, -infinity, +infinity) -+infinity:it's on;y for the 
 	first pass but we will switched to n.data
 	then call check(n, left, right)
 	if n = null
 	if n.data <= left || n.data >= right  :all left children must be less than n  and right children must be greater than n
 	but we are checking by reversing it if that true return false and break
 	otherwise do a recursion on:
 	n.left: check(n.left, left, n.data)
 	n.right: check(n.right, n.data, right)




*/

class Node {
	int data;
	Node left;
	Node right;
}

boolean checkBST(Node root) {
	return check(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

boolean check(Node n, int left, int right) {
	if(n == null) {
		return true;
	}
	if(n.data <= left || n.data >= right) {
		return false;
	}
	return check(n.left, left, n.data) && check(n.right, n.data, right);
}


