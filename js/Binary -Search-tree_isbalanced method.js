//-------------------------------------------------------BINARY SEARCH TREE ISBALANCED METHOD--------------------------------------
//jump to line 42


//----------- checks whether the tree is Balaned or Not 
/*
    An empty tree is height-balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.

*/

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.duplicate = 0;
    }
}
class Binary_search_tree {
    constructor() {
        this.root = null;
    }
    add(val) {
        let newnode = new Node(val);
        if (!this.root) { this.root = newnode; return this }
        let currentnode = this.root;
        while (currentnode) {
            if (val < currentnode.value) {
                if (!currentnode.left) { currentnode.left = newnode; return this }
                currentnode = currentnode.left;
            } else
                if (val > currentnode.value) {
                    if (!currentnode.right) { currentnode.right = newnode; return this }
                    currentnode = currentnode.right;
                } else
                    if (currentnode.value === val) { currentnode.duplicate++; return this }
        }
    }
    isbalanced() {
        //if no root  return tree  ----> An empty tree is height-balanced
        if (!this.root) return true;
        //recrusion helper function  -----. accepts an node
        function recursionhelper(node) {
            //base case for the recursion ---> return -1 if the node is null
            if (!node) return -1;
            //leftchild and rightchild stores the returned values of their recursive funtion 
            let leftchild = recursionhelper(node.left);
            let rightchild = recursionhelper(node.right);
            //x stores the differnce between  leftchild and rightchild
            let x = leftchild - rightchild;
            //if x = 0 (or) x = -1 (or) x = 1 
            if (x === 0 || Math.abs(x) === 1)
                //return the maximim from (leftchild and rightchild) + 1 
                return Math.max(leftchild, rightchild) + 1;
        }
        //returns true if differnce is equal then 1  or 0  else return false 
        return Math.abs(recursionhelper(this.root.left) - recursionhelper(this.root.right)) <= 1;
    }

    //with out the comments...........
    isbalanced2() {
        function recursionhelper(node) {
            if (!node) return -1;
            let leftchild = recursionhelper(node.left);
            let rightchild = recursionhelper(node.right);
            let x = leftchild - rightchild;
            if (x === 0 || Math.abs(x) === 1)
                return Math.max(leftchild, rightchild) + 1;
        }
        return Math.abs((this.root) ? recursionhelper(this.root.left) - recursionhelper(this.root.right) : 0) <= 1;
    }
}

let BST = new Binary_search_tree;
BST.add(50); //adds new element/value to the tree
BST.add(17);
BST.add(76);
BST.add(9);
BST.add(23);
BST.add(54);
BST.add(14);
BST.add(19);
BST.add(72);
BST.add(12);
/* tree looks like this after the values entered
                             50
                           /    \
                         17       76
                    /---/   \     /
                  9         23  54
                   \      /       \
                   14    19        72
                  /
                 12
*/

console.log(BST.isbalanced2());//false


// //////////////////////////////////////////////////////////////////////////

let BST2 = new Binary_search_tree();
BST2.add(50); //adds new element/value to the tree
BST2.add(17);
BST2.add(72);
BST2.add(12);
BST2.add(23);
BST2.add(54);
BST2.add(76);
BST2.add(9);
BST2.add(14);
BST2.add(19);
BST2.add(67);
// /* tree looks like this after the values entered                                              
//                              50              
//                            /    \            
//                          17       72         
//                    /----/   \     / \          
//                  12        23  54   76
//                 /  \      /      \ 
//                9   14    19       67 

// */
console.log(BST2.isbalanced());//true


// ///////////////////////////////////////////////////////////////////////////
let BST1 = new Binary_search_tree();
BST1.add(50);
BST1.add(40);
BST1.add(60);
BST1.add(30);
BST1.add(70);
BST1.add(20);
BST1.add(80);
BST1.add(10);
BST1.add(90);
// /* tree looks like this after the values entered
//                              50
//                            /    \
//                          40       60
//                         /           \
//                        30            70
//                       /                \
//                     20                  80     
//                    /                      \
//                  10                       100   

// */
console.log(BST1.isbalanced());//false

let BST4 = new Binary_search_tree()

BST4.isbalanced2();