//---------------------------------- DEPTH FIRST IN-ORDER TREE TRAVERSAL---------------------------------------

/*
DFIO::  DEPTH FIRST IN-ORDER TREE TRAVERSAL

Adds left-node's value of the current parent 
then, adds the value of the current parent 
then, adds right-node's value of the current parent 

                ^           15              
                |         /    \            
                ^       6       25         
                |
EX::

visited=[]

            consider 25 as the parent node 
            check if it have the left node 
                    true :: add the value of its left-nde  {6 in visited list}       [ 6 ]
            then add the value the parent node {which is 15 in visited list}         [ 6 , 15 ]
            check if it have the right node
                    true :: add the value of its right-node  {25 in visited list}    [ 6 , 15 , 25 ]

atlast visited= [ 6 , 15 , 25 ]

Ex::
            
                ^           15              
                |         /    \            
                ^       6       25         
                |     /  \     /   \       
                ^   1     8   17    35     
                |   
DFIO::  trever/expore the tree left fully then adds the value to the visited list in (bottom-up order)
        adds the root value
        trever/expore the tree right fully then adds the value to the visited list in (bottom-up order)

                        [ 1 , 6 ]
                        [ 1 , 6 , 8 ]
                        [ 1 , 6 , 8 , 15 ]
                        [ 1 , 6 , 8 , 15 , 17 , 25 ]
                        [ 1 , 6 , 8 , 15 , 17 , 25 , 35 ] 
 */

/// CODE TO CREATE A  TREE/////////////////////////////////////////////////// 
/// -----------------------------------------------------jump to line 64 :)---Depth-First-IN-Order

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
    /////////////////////////////////////DEPTH FIRST IN-ORDER STARTS HERE///////////////////////////
    depth_first_Inorder(){
        //create a empty list to store the elements visited
        var visited=[];
        //helper function for the recursion --- accepts the node 
        function recursion_helper(node){
            //if current-node have the left-node then recurse the node.left to the same helper funtion
            if(node.left)recursion_helper(node.left);
            //add the current node's value in end of the visited list
            visited.push(node.value);
            //if current-node have the right-node then recurse the node.right to the same helper funtion
            if(node.right)recursion_helper(node.right);
            
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

BST.depth_first_Inorder() // ------ output -------[ 1 , 6 , 8 , 15 , 17 , 25 , 35 ] 

