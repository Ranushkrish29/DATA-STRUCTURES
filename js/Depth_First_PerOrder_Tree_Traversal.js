//---------------------------------- DEPTH FIRST PREORDER TREE TRAVERSAL---------------------------------------

/*
                                                
                |           15              
                V         /    \            
                |       6       25         
                V     /  \     /   \       
                |   1     8   17    35     
                V   
Depth first PreOrder tree traversal will traver all the left-side-nodes of the current parent and then right-side-nodes of the parent 
from the above tree the DFPO  works like 

          15             [15] -----for 15 , 6 is left and 25 is right --- first traver the left side fully , and then traver the right side 25 fully.
          /\
        6    25          [15 , 6 , 1 , 8]    
       /\    /\
      1  8 17  35        [15 , 6 , 1 , 8 , 35 , 17 , 35]

 */

/// CODE TO CREATE A  TREE/////////////////////////////////////////////////// 
/// -----------------------------------------------------jump to line 66 :)---Depth-First-PreOrder

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
    /////////////////////////////////////DEPTH FIRST PREORDER STARTS HERE///////////////////////////
    depth_first_preorder(){
        //create a empty list to store the elements visited
        var visited=[];
        //helper function for the recursion --- accepts the node 
        function recursion_helper(node){
            //add the current node's value in end of the visited list
            visited.push(node.value);
            //if current-node have the left-node then recurse the node.left to the same helper funtion
            if(node.left)recursion_helper(node.left);
            //if current-node have the right-node then recurse the node.right to the same helper funtion
            if(node.right)recursion_helper(node.right);
        }
        //call the helper function with arg of the current root 
        recursion_helper(this.root);
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

BST.depth_first_preorder() // ------ output ------- [15 , 6 , 1 , 8 , 25 , 17 , 35]