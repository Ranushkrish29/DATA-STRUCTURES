

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
           currentnodeparent=null;
        //loop untilt the end of the tree // untill no-curretnnode  &&   isfound is false --> if found is true then stop the loop 
        while (currentnode) {
            //if current node value is  equal to the given value ----> it will end the loop and stops the unnecessary looping
            if (currentnode.value === val){
                return [ currentnode , currentnodeparent];
            }
            //if given value is lesser then current node's value then update the current node to current node's left -->if there is no current-node's-left then loop will end 
            if (val < currentnode.value) {
                currentnodeparent=currentnode;
                currentnode = currentnode.left;
            } else
                //if given value is greater then current node's value then update the current node to current node's right -->if there is no current-node's-right then loop will end 
                if (val > currentnode.value) {
                    currentnodeparent=currentnode;
                    currentnode = currentnode.right;
                }
        }
        //return the current node 
        
        return [null, null];
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //---------------------------REMOVE METHOD
    removeroot(value) {
        if (!this.root) return undefined;
        let [nodetoremove , nodetoremoveparent ]=this.find(value) ;
        if(nodetoremove===null) return undefined
        if (nodetoremove === this.root) {
            let currentnode = nodetoremove;
            if (currentnode.right) {//
                let currentnodeparent ;
                currentnode = currentnode.right//
                if(currentnode.left){
                    while (currentnode) {
                        if (currentnode.left) {
                            currentnodeparent = currentnode
                            currentnode = currentnode.left;
                        } else {
                            break;
                        }
                    }    
                    currentnodeparent.left = currentnode.right;
                    currentnode.right = this.root.right;
                }
                currentnode.left = this.root.left;
                this.root = currentnode
            }else if(currentnode.left) {
                this.root = currentnode.left;    
            }else {
                this.root = null;
            }
        } else{
            let currentnode = nodetoremove;
            if (currentnode.right) {//
                let currentnodeparent ;
                currentnode = currentnode.right//
                if(currentnode.left){
                    while (currentnode) {
                        if (currentnode.left) {
                            currentnodeparent = currentnode
                            currentnode = currentnode.left;
                        } else {
                            break;
                        }
                    }    
                    currentnodeparent.left = currentnode.right;
                    currentnode.right = nodetoremove.right;
                }
                currentnode.left = nodetoremove.left;
                if(nodetoremoveparent.left ===nodetoremove){
                    nodetoremoveparent.left=currentnode;
                }else {
                    nodetoremoveparent.right=currentnode;
                }
            }else if(currentnode.left) {
                nodetoremoveparent.left =  currentnode.left
            }else {
                if(nodetoremoveparent.left ===nodetoremove){
                    nodetoremoveparent.left=null
                }else {
                    nodetoremoveparent.right=null
                }
            }
        }
        nodetoremove.left=null;
        nodetoremove.right=null; 
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
//   4     10        17       35
//  /     /  \         \     /   \
// 3     6    11       22   30   45



console.log(BST.removeroot(25));
console.log(BST.removeroot(20));
console.log(BST.removeroot(35));
console.log(BST.removeroot(12));
console.log(BST.removeroot(30));
console.log(BST.removeroot(45));
console.log(BST.removeroot(4));

console.log(BST.root)

