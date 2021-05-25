//---------------------------------------BINARY SEARCH TREE -------------------------------------

/*
A binary tree is a type of data structure for storing data such as numbers in an organized way.
Binary search trees allow binary search for fast lookup, addition and removal of data items

BINARY SEARCH TREE CONDITION ::  
    BST have two child nodes or less then two child nodes for each parent nodes 
    all values which are less then the current node value , placed left side of the node
    all values which are greater then the current node value  , placed right side of the node 
    if both the value is same add +1 to the deplicate ;

EX::

//            15             15 is the root 
//          /    \
//      6          25         // CONSIDER 15 AS CURRENT NODE ::: 6 is smaller then 15 so placed in left ,where as 25 is greater then 15 and placed in rigth
//    /   \       /   \
//  1      8    17     35     // CONSIDER 6 AS CURRENT NODE  ::: 1 is smaller then 6 so placed in left ,where as 8 is greater then 6 and placed in rigth
                              // CONSIDER 25 AS CURRENT NODE ::: 17 is smaller then 35 so placed in left ,where as 35 is greater then 25 and placed in rigth
                              // 1    8   17  35   are the leafs of the tree ---they have no child node


//            15             15 is the root 
//         /      \
//       9         30         // CONSIDER 15 AS CURRENT NODE ::: 9 is smaller then 15 so placed in left ,where as 30 is greater then 15 and placed in rigth
//     /  \       /           // CONSIDER 9 AS CURRENT NODE  ::: 5 is smaller then 9 so placed in left ,where as 14 is greater then 9 and placed in rigth
//    5    14    17           // CONSIDER 30 AS CURRENT NODE ::: 17 is smaller then 30 so placed in left .
//        /       \           // CONSIDER 14 AS CURRENT NODE ::: 12 is smaller then 14 so placed in left .
//       12         25        // CONSIDER 17 AS CURRENT NODE ::: 25 is greater then 17 and placed in rigth.
                              // 5    12   25    are the leafs of the tree ---they have no child node.


*/

//NODE CLASS   --contains the information about the node [ value , left child ,right child , duplicate ]
class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
        this.duplicate=0;
    }
}

// main  BINARY SEARCH TREE -- it contains requried function for Binary search tree
class Binary_search_tree{
    //defines the current root as null
    constructor(){
        this.root=null;
    }
    //add  method --- adds new value to the tree in a sorted way using the BTS condition
    add(val){
        //create a new node using the node class with the given value
        let newnode =new Node(val);
        //if no root is defined   :: set newnode as the root and return the tree 
        if(!this.root){ this.root = newnode;return this}
        //else store the root-node as current-node 
        let currentnode = this.root;
        //loop untilt the end of the tree // untill the curretnnode is null
        while(currentnode){
            //if given value is lesser then then current node's value
            if(val<currentnode.value){
                //if the current node don't have left child then set the newnode as the left child-node and return the tree 
                if(!currentnode.left){
                    currentnode.left=newnode;
                    return this
                }//else if it have left child-node update the current-node to current-node's left-node 
                currentnode=currentnode.left;
            }else 
            //if given value is greater then then current node's value
            if(val>currentnode.value){
                //if the current node don't have right child then set the newnode as the right child-node and return the tree 
                if(!currentnode.right){
                    currentnode.right=newnode;
                    return this
                }//else if it have right child-node update the current-node to current-node's right-node 
                currentnode=currentnode.right;    
            }else //if currentnode's value and the given value is same ,then increament the duplicate and return the tree 
             if(currentnode.value===val){
                currentnode.duplicate++;
                return this
            }
        }
    }
    //find method  ---returns the given node from the tree 
    find(val){
        //if no root is present  ::  return underfined 
        if(!this.root)return undefined
        //store the root-node as current-node  
        let currentnode =this.root, 
            //isfound is the bool --->set to false [we haven't find the node yet!]
           isfound =false;
        //loop untilt the end of the tree // untill no-curretnnode  &&   isfound is false --> if found is true then stop the loop 
        while(currentnode && !isfound){
            //if current node value is  equal to the given update isfound to true  ----> it will end the loop and stops the unnecessary looping
            if (currentnode.value ===val) isfound =true;
            //if given value is lesser then current node's value then update the current node to current node's left -->if there is no current-node's-left then loop will end 
            if(val<currentnode.value){
                    currentnode=currentnode.left;   
            }else
            //if given value is greater then current node's value then update the current node to current node's right -->if there is no current-node's-right then loop will end 
            if(val>currentnode.value){
                    currentnode=currentnode.right;
            }
        }
        //return the current node 
        return currentnode;
    }
    //isincludes methos --- returns true if the given value is in the tree or return false
    isincludes(val){
        //use the find method to get required node from the tree  ---> if required node is not present in tree ,then it will return null 
        //if this.find(val) retured node then return true , else return false  
        return this.find(val) ? true : false;
    }
}

let BST = new Binary_search_tree ;

BST.add(15); //adds new element/value to the tree
BST.add(6);
BST.add(25);
BST.add(1);
BST.add(17);
BST.add(8);
BST.add(30);
BST.add(15);

//output of the tree ,after the above adds 

//            15
//          /    \
//      6          25
//    /   \       /   \
//  1      8    17     30

BST.find(17) //returns the node, which have the value of 17

BST.isincludes(1); //returns true if the value is present in  the tree else returns false


//------------------------------------------------------END OF BINARY SEARCH TREE---------------------------------------------------------------- 