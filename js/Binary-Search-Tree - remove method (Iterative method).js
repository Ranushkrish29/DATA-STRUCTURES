////-----------------------------------------------BINARY SEARCH TREE - REMOVE METHOD USING ITERATIVE-----------------------------------------------
//jump to line 89 




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

    //find method  ---returns the given node from the tree 
    find(val) {
        //if no root is present  ::  return underfined 
        if (!this.root) return undefined
        //store the root-node as current-node  
        let currentnode = this.root,
            currentnodeparent = null;
        //loop until the end of the tree // untill no-curretnnode  
        while (currentnode) {
            //if current node value is  equal to the given value ----> it will end the loop and stops the unnecessary looping
            if (currentnode.value === val) {
                //return array [ currentnode , currentnodeparent ]
                return [currentnode, currentnodeparent];
            }
            //if given value is lesser then current node's value then update the current node to current node's left -->if there is no current-node's-left then loop will end 
            if (val < currentnode.value) {
                //currentnodeparent as the currentnode and update the currentnode as the current node 's left child
                currentnodeparent = currentnode;
                currentnode = currentnode.left;
            } else
                //if given value is greater then current node's value then update the current node to current node's right -->if there is no current-node's-right then loop will end 
                if (val > currentnode.value) {
                    //currentnodeparent as the currentnode and update the currentnode as the current node 's right child
                    currentnodeparent = currentnode;
                    currentnode = currentnode.right;
                }
        }
        //if no node with given value is found then return arr [ null null ]; 
        return [null, null];
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //---------------------------REMOVE METHOD
    remove(value) {

        //if no root is present (empty tree ) return undefined 
        if (!this.root) return undefined;

        //find method returns  , node-to-be-remove and  node-to-be-remove's-parent-node 
        let [nodetoremove, nodetoremoveparent] = this.find(value);

        //if node-to-be-remove is null return undefined  --- no such node is found / tree dont have node with the value 
        if (nodetoremove === null) return undefined

        //if  node-to-be-remove have right child .... 
        if (nodetoremove.right) {
            // let currentnode  = node-to-be-remove's right child  and currentnode-parent = node-to-be-remove    
            let
                currentnode = nodetoremove.right,
                currentnodeparent = nodetoremove;

            //if currentnode have left child ....
            if (currentnode.left) {
                //loops if currentnode is present 
                while (currentnode) {
                    //if currentnode have left child ....
                    if (currentnode.left) {
                        //update the currentnode-parent to currentnode
                        currentnodeparent = currentnode
                        //and update the currentnode to currentnode's left child
                        currentnode = currentnode.left;
                    }
                    else //if currentnode have no left child  -- break the loop
                        break;
                }
                //update  currentnode-parent's left child  to currentnode's  right child      
                currentnodeparent.left = currentnode.right;
                //set the node-to-be-remove's right child as the   currentnode 's right child 
                currentnode.right = nodetoremove.right;
            }

            //set the node-to-be-remove's left child as the   currentnode 's left child 
            currentnode.left = nodetoremove.left;

            //if node-to-be-remove-parent is  null { otherwords---> node-to-be-remove is the root node  ( only root node have no parent node ) }
            if (nodetoremoveparent === null) {
                //update the current node as the root node
                this.root = currentnode
            }
            //else if  node-to-be-remove-parent's left child is node-to-be-remove ... 
            else if (nodetoremoveparent.left === nodetoremove) {
                //set   currentnode  as the  node-to-be-remove-parent's left child 
                nodetoremoveparent.left = currentnode;

            } else // else  node-to-be-remove  should be  node-to-be-remove-parent's right child  ... 
            {
                //set   currentnode  as the  node-to-be-remove-parent's right child 
                nodetoremoveparent.right = currentnode;
            }
        }
        // else if node-to-be-remove have only left child  (no right child)....
        else if (nodetoremove.left) {
            //if node-to-be-remove-parent is  null { otherwords---> node-to-be-remove is the root node  ( only root node have no parent node ) }
            if (nodetoremoveparent === null) {
                //update the node-to-be-removes's left child as the root node;
                this.root = nodetoremove.left;
            }
            // else if  node-to-be-remove-parent's left child  is  node-to-be-remove  
            else if (nodetoremoveparent.left === nodetoremove) {
                //set node-to-be-remove-parent's left child  to  node-to-be-remove's left child
                nodetoremoveparent.left = nodetoremove.left

            } else// else node-to-be-remove  should be  node-to-be-remove-parent's right child  ...
            {
                //set node-to-be-remove-parent's right child  to  node-to-be-remove's right child
                nodetoremoveparent.right = nodetoremove.left
            }

        }
        // else if node-to-be-remove have no child  .... ( leaf node )
        else {
            //if node-to-be-remove-parent is  null { otherwords---> node-to-be-remove is the root node  ( only root node have no parent node ) }
            if (nodetoremoveparent === null) {
                //update the root as the null
                this.root = null;
            }
            // else if  node-to-be-remove-parent's left child  is  node-to-be-remove  ... 
            else if (nodetoremoveparent.left === nodetoremove) {
                //update the node-to-be-remove-parent's left child to null
                nodetoremoveparent.left = null

            } else  // else  node-to-be-remove  should be  node-to-be-remove-parent's right child  ... 
            {
                //update the node-to-be-remove-parent's left child to null
                nodetoremoveparent.right = null
            }

        }

        //remove the node-to-be-remove's left and right child connections      
        nodetoremove.left = null;
        nodetoremove.right = null;
        //return the node to be remove
        return nodetoremove;

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

