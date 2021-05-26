//----------------------------------BREADTH FIRST SEARCH TREE TRAVERSAL---------------------------------------

/*
                                                
                        -->     15              
                              /    \            
                    --->   6    --->  25         
                         /   \       /   \       
                   ---> 1  ->  8 -> 17  -> 35     

Breadth first search tree traversal will traver all the siblings node of the parent 
from the above tree the BFS  works like 

    ===>      15             [15]
              /\
    ===>    6    25          [15 , 6 , 25]
           /\    /\
    ===>  1  8 17  35        [15 , 6 , 25 , 1 , 8 , 17 , 35]

 */

/// CODE TO CREATE A  NEW TREE/////////////////////////////////////////////////// 
/// -----------------------------------------------------jump to line 66 :)---Breadth-First-Search

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
    /////////////////////////////////////BREADTH FIRST SEARCH STARTS HERE///////////////////////////
    breadth_first_search(){
        //to store the current node
        var node ,
        //for the tobevisit opeartion FIFO
        tobevisit =[],
        //output data
        visited=[];
        //push the root to the tobevisit list
        tobevisit.push(this.root);
        //true untill length of the tobevisit list is greater then 0
        while(tobevisit.length){
            //store the first element from the tobevisit as a node
            node = tobevisit.shift();
            //push the node to the visited list
            visited.push(node.value);
            //if it have the left-node then add the left-node in the end of the tobevisit list
            if(node.left)tobevisit.push(node.left);
            //if it have the right-node then add the right-node in the end of the tobevisit list
            if(node.right)tobevisit.push(node.right);
        }
        //return the visited list\
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
BST.add(30);
BST.add(15);

/* tree looks like this after the values entered                                              
                        -    15              
                           /    \            
                    --   6       25         
                       /   \     /   \       
                      1     8   17     35     
*/

BST.breadth_first_search() // ------ output ------- [15 , 6 , 25 , 1 , 8 , 17 , 35]