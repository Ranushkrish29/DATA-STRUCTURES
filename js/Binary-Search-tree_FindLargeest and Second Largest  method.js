//------------------------------------------FIND LARGEST AND SECOND LARGEST VALUE/NODE IN TREE----------------------------------
////  jump to line 60;

//NODE CLASS   --contains the information about the node [ value , left child ,right child , duplicate ]
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.duplicate = 0;
    }
}
class Count {
    constructor(val) {
        this.c = val;
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
    ////////////////////////////////////////////////////////////////
    // --------TO FIND THE LARGEST VALUE IN THE TREE
    findLargest() {
        let current = this.root,
            max;
        if (!this.root) return undefined;
        if (current.right)
            current = current.right;
        while (current) {
            max = current;
            current = current.right;
        }
        return max === undefined ? undefined : max.value;
    }
    ///////////////////////////////////////////////////////////
    // --------TO FIND THE SECOND LARGEST VALUE IN THE TREE
    findSecondLargest() {
        //count class 
        let count = new Count(0);
        let secondmax = null;
        //recursion helper function  accepts ---> a node and  counter
        function recursionheplper(current, count) {
            //base condition
            if (current === null || count.c >= 2)
                return;
            //recurse the right child of the current
            recursionheplper(current.right, count);
            //increment the count 
            count.c++;
            //if count = 2 check the secondmax is null .. if null update secondmax = current.value  
            if (count.c === 2) {
                secondmax = current.value;
                return;
            }
            //recurse the left child of the current
            recursionheplper(current.left, count);
        }
        //call the recursion helper function  --- > (args as) root-node and count=0
        recursionheplper(this.root, count);
        //return the  secondmax
        return secondmax;
    }

}

let BST = new Binary_search_tree();
BST.add(15); //adds new element/value to the tree
BST.add(6);
BST.add(25);
BST.add(1);
BST.add(17);
BST.add(8);
BST.add(26);
BST.add(28);
BST.add(38);
// output of the tree ,after the above adds 

//            15
//          /    \
//      6          25
//    /   \       /   \
//  1      8    17     26
//                        \
//                        28
//                           \      
//                            38
console.log(BST.findLargest());//38
console.log(BST.findSecondLargest());//28