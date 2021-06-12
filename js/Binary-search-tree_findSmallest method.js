//---------------------------------------FIND SMALLEST AND SECOND SMALLEST VALUE/NODE IN TREE----------------------------------
////  jump to line 61

//NODE CLASS   --contains the information about the node [ value , left child ,right child , duplicate ]
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.duplicate = 0;
    }
}
//class count
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
    ///////////////////////////////////////////////////////////
    // --------TO FIND THE SMALLEST VALUE IN THE TREE
    findSmallest() {
        //let current be the root node
        let current = this.root,
            max;
        //if no root return undefined
        if (!this.root) return undefined;
        //true untill current is not null
        while (current) {
            //set max to current and update current to current's left child 
            max = current;
            current = current.left;
        }
        //return the max value
        return max === undefined ? undefined : max.value;
    }
    ///////////////////////////////////////////////////////////
    // --------TO FIND THE SECOND SMALLEST VALUE IN THE TREE
    findSecondSmallest() {
        //count class 
        let count = new Count(0);
        let SecondSmallest = null;
        //recursion helper function  accepts ---> a node and  counter
        function recursionheplper(current, count) {
            //base condition
            if (current === null || count.c >= 2)
                return;
            //recurse the left child of the current
            recursionheplper(current.left, count);
            //increment the count 
            count.c++;
            //if count = 2  ..   update secondsmallest = current.value  
            if (count.c === 2) {
                SecondSmallest = current.value;
                return;
            }
            //recurse the right child of the current
            recursionheplper(current.right, count);
        }
        //call the recursion helper function  --- > (args as) root-node and count=0
        recursionheplper(this.root, count);
        //return the  secondsmallest
        return SecondSmallest;

    }
}

let BST = new Binary_search_tree();

BST.add(15); //adds new element/value to the tree
BST.add(6);
BST.add(25);
BST.add(17);
BST.add(8);
BST.add(30);
BST.add(15);

//output of the tree ,after the above adds 

//            15
//          /    \
//      6          25
//        \       /   \
//         8    17     30
console.log(BST.findSmallest());//6
console.log(BST.findSecondSmallest());//8