//-------------------------------------------- stack ---------------------------------


/**
   it works in the base rule of first in last out [FILO] or last in first out [LIFO]

    -->       7   ->   6 ->   5 ->   4 ->   3 ->   2 ->   1 ->   0 ->    NULL
              LASTIN                                            FIRST IN

              add----->  new element to the end 
              remove-->  remove the recently added element
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
    addtop(val){
        //create a new node with the given val
        let newnode = new Node(val);
        //if empty set first and last both to new node
        if(this.length===0){
            this.first=newnode;
            this.last=this.first;
        }//else  set newnode's next to current first node and make the new node as the first node
        else{
            newnode.next=this.first;
            this.first=newnode;
        }
        //return the increased length
        return ++this.length
    }
    //removetop  --- to remove the recently added node/element from the stack
    removetop(){
        //store the current first node as the removenode
        let removenode=this.first
        //if stack is empty then return undefined
        if(this.length===0)return undefined;
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
        return removenode.val;
    }
}

let stack = new Stack;

//adds new element to the stack

stack.addtop(0);    //  0
stack.addtop(1);    // 1 -> 0
stack.addtop(2);    // 2 -> 1 -> 0
stack.addtop(3);    // 3 -> 2 -> 1 -> 0

//remove the recently added elements

stack.removetop()   // 2 -> 1 -> 0
stack.removetop()   // 1 -> 0
stack.removetop()   // 0
stack.removetop()   // null





