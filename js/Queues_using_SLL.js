//-------------------------------------------- stack ---------------------------------


/**
   it works in the base rule of first in First out [FIFO] or last in last out [LILO]

    -->       7   ->   6 ->   5 ->   4 ->   3 ->   2 ->   1 ->   0 ->    NULL
              LASTIN                                            FIRST IN

              add----->  new element to the end 
              remove-->  remove the first element
 */

//class node to store the value and the pointer 
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
//main stack class
class Stack {
    //stores first ,last nodes and total length
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    //addtop method --- to add element in the end of the stack 
    addend(val){
        //create a new node with the given val
        let newnode = new Node(val);
        //if empty set first and last both to new node
        if(this.length===0){
            this.first=newnode;
            this.last=this.first;
        }//else  set  current late node's next to newnode and make the new node as the last node
        else{
            this.last.next=newnode;
            this.last=newnode;
        }
        //return the increased length
        return ++this.length
    }
    //remove  --- to remove the first added node/element from the stack
    remove(){
        //store the current first node as the removenode
        let removenode=this.first
        //if stack is empty then return null
        if(this.length===0)return null;
        //if stack hve only one element/node then set both first and last as null
        if(this.length===1){
            this.first=null;
            this.last=null;
        }//else update the first node to first node's next node/element and 
        else{
        this.first=this.first.next;
        //set removenode's next to be null
        removenode.next = null}
        //return the removed value
        this.length--
        return removenode.val;
    }
}

let stack = new Stack;

//adds new element to the stack

stack.addend(0);    //  0
stack.addend(1);    // 1 -> 0
stack.addend(2);    // 2 -> 1 -> 0
stack.addend(3);    // 3 -> 2 -> 1 -> 0

//remove the first added elements

stack.remove()   // 3 -> 2 -> 1 -> 0
stack.remove()   // 3 -> 2 -> 1
stack.remove()   // 3 -> 2
stack.remove()   // 3




