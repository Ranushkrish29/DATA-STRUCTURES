////---------------------------------------------------------BINARY SEARCH TREE - REMOVE METHOD Using RECURSION-----------------------------------------------
//jump to line 58 




//NODE CLASS   --contains the information about the node [ value , left child ,right child , duplicate ]
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.duplicate = 0;
    }
}

// main  BINARY SEARCH TREE -- it contains requried function for Binary search tree
class Binary_search_tree {
    //defines the current root as null
    constructor() {
        this.root = null;
    }
    //add  method --- adds new value to the tree in a sorted way using the BTS condition
    add(val) {
        //create a new node using the node class with the given value
        let newnode = new Node(val);
        //if no root is defined   :: set newnode as the root and return the tree 
        if (!this.root) { this.root = newnode; return this }
        //else store the root-node as current-node 
        let currentnode = this.root;
        //loop untilt the end of the tree // untill the curretnnode is null
        while (currentnode) {
            //if given value is lesser then then current node's value
            if (val < currentnode.value) {
                //if the current node don't have left child then set the newnode as the left child-node and return the tree 
                if (!currentnode.left) {
                    currentnode.left = newnode;
                    return this
                }//else if it have left child-node update the current-node to current-node's left-node 
                currentnode = currentnode.left;
            } else
                //if given value is greater then then current node's value
                if (val > currentnode.value) {
                    //if the current node don't have right child then set the newnode as the right child-node and return the tree 
                    if (!currentnode.right) {
                        currentnode.right = newnode;
                        return this
                    }//else if it have right child-node update the current-node to current-node's right-node 
                    currentnode = currentnode.right;
                } else //if currentnode's value and the given value is same ,then increament the duplicate and return the tree 
                    if (currentnode.value === val) {
                        currentnode.duplicate++;
                        return this
                    }
        }
    }

    remove(value) {
        if (this.root === null) return;
        let removed;
        function findAndRemove(node) {
            if (value === node.value) {
                removed = new Node(node.value);

                if (node.left && node.right) {
                    let cur = node.right;
                    while (cur.left) {
                        cur = cur.left;
                    }
                    node.value = cur.value;
                    cur.value = value;
                    node.right = findAndRemove(node.right);
                } else if (node.left) {
                    return node.left;
                } else if (node.right) {
                    return node.right;
                } else {
                    return null;
                }
            } else if (value < node.value) {
                if (node.left) {
                    node.left = findAndRemove(node.left);
                }
            } else {
                if (node.right) {
                    node.right = findAndRemove(node.right);
                }
            }
            return node;
        }
        this.root = findAndRemove(this.root);
        return removed;
    }

}

let BST = new Binary_search_tree;


BST.add(12);
BST.add(5);
BST.add(25);
BST.add(4);
BST.add(10);
BST.add(20);
BST.add(35);
BST.add(3);
BST.add(6);
BST.add(11);
BST.add(22);
BST.add(30);
BST.add(45);

//output of the tree ,after the above adds 

//               12
//           /       \
//       5               25
//     /   \           /    \
//   4     10        20       35
//  /     /  \         \     /   \
// 3     6    11       22   30   45


console.log(BST.remove(12));//Node { value: 12, left: null, right: null, duplicate: 0 }

//output of the tree ,after the above remove 
//               20
//           /       \
//       5               25
//     /   \           /    \
//   4     10        22       35
//  /     /  \              /   \
// 3     6    11           30   45

console.log(BST.remove(20));//Node { value: 20, left: null, right: null, duplicate: 0 }

//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//     /   \                \
//   4     10                35
//  /     /  \              /   \
// 3     6    11           30   45

console.log(BST.remove(35));//Node { value: 35, left: null, right: null, duplicate: 0 }

//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//     /   \                \
//   4     10                45
//  /     /  \              /   
// 3     6    11           30   

console.log(BST.remove(3));//Node { value: 3, left: null, right: null, duplicate: 0 }

//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//     /   \                \
//   4     10                45
//        /  \              /   
//       6    11           30   

console.log(BST.remove(30));//Node { value: 30, left: null, right: null, duplicate: 0 }

//output of the tree , after the above remove
//               22
//           /       \
//       5               25
//     /   \                \
//   4     10                45
//        /  \                 
//       6    11              

console.log(BST.remove(4));//Node { value: 4, left: null, right: null, duplicate: 0 }

//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//         \                \
//         10                45
//        /  \              /   
//       6    11           30   

console.log(BST.remove(10));//Node { value: 10, left: null, right: null, duplicate: 0 }


//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//         \                \
//         11                45
//        /                 /   
//       6                30   

console.log(BST.remove(11));//Node { value: 11, left: null, right: null, duplicate: 0 }


//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//         \                \
//          6                45
//                          /   
//                        30   

console.log(BST.remove(45));//Node { value: 45, left: null, right: null, duplicate: 0 }


//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//         \                \
//          6                30


console.log(BST.remove(100))//undefined  ---> no node in the tree have value 100 , so returns undefined


//output of the tree ,after the above remove
//               22
//           /       \
//       5               25
//         \                \
//          6                30

