//---------------------------------- DEPTH FIRST POST-ORDER TREE TRAVERSAL---------------------------------------

/*
                                                
                ^           15              
                |         /    \            
                ^       6       25         
                |     /  \     /   \       
                ^   1     8   17    35     
                |   
Depth first PreOrder tree traversal will traver/explore all the left-side-nodes of the current parent and then right-side-nodes of the parent  
and then add it to the list from the bottom-top order
from the above tree the DFPO  works like 




          15              
          /\
        6    25              
       /\    /\
      1  8 17  35       [ 1 , 8 ]
                        [ 1 , 8 , 6 ]
                        [ 1 , 8 , 6 , 17 , 35 ]
                        [ 1 , 8 , 6 , 17 , 35 , 25 ]
                        [ 1 , 8 , 6 , 17 , 35 , 25 , 15 ]
                        ----adds from the bottom to up  
 */

/// CODE TO CREATE A  TREE/////////////////////////////////////////////////// 
/// -----------------------------------------------------jump to line 64 :)---Depth-First-Post-Order

class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
        this.duplicate=0;
    }
}
class Binary_search_tree{
    constructor(){
        this.root=null;
    }
    add(val){
        let newnode =new Node(val);
        if(!this.root){ this.root = newnode;return this}
        let currentnode = this.root;
        while(currentnode){
            if(val<currentnode.value){
                if(!currentnode.left){currentnode.left=newnode; return this}
                    currentnode=currentnode.left;
            }else 
            if(val>currentnode.value){
                if(!currentnode.right){currentnode.right=newnode; return this}
                currentnode=currentnode.right;    
            }else 
            if(currentnode.value===val){ currentnode.duplicate++; return this}
        }
    }
   
    ////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////DEPTH FIRST POST-ORDER STARTS HERE///////////////////////////
    depth_first_postorder(){
        //create a empty list to store the elements visited
        var visited=[];
        //helper function for the recursion --- accepts the node 
        //traver the left side of the tree fully and then add value/elements {in bottom-up order } to the visited list and then
        //traver the right side of the tree fully and then add value/elements {in bottom-up order}  to the visited list
        //then finally add the root node/element value
        function recursion_helper(node){
            //if current-node have the left-node then recurse the node.left to the same helper funtion
            if(node.left)recursion_helper(node.left);
            //if current-node have the right-node then recurse the node.right to the same helper funtion
            if(node.right)recursion_helper(node.right);
            //add the current node's value in end of the visited list
            visited.push(node.value);
        }
        //call the helper function with arg of the current root 
        recursion_helper(this.root);
        //return the list 
        return visited;
    }
}

let BST = new Binary_search_tree ;

BST.add(15); //adds new element/value to the tree
BST.add(6);
BST.add(25);
BST.add(1);
BST.add(17);
BST.add(8);
BST.add(35);
BST.add(15);

/* tree looks like this after the values entered                                              
                        -    15              
                           /    \            
                    --   6       25         
                       /   \     /   \       
                      1     8   17     35     
*/

BST.depth_first_postorder() // ------ output -------[ 1 , 8 , 6 , 17 , 35 , 25 , 15 ]

