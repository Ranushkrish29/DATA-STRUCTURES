//--------------------------------------------------QUEUE USING TWO STACK-------------------------------------
//for code , jump to line 83
/**
    While stack1 is not empty, push everything from stack1 to stack2.
    Push x to stack1 (assuming size of stacks is unlimited).
    Push everything back to stack1.

    FOR ENQUEUEING :
*1
        s1=[]     s2=[]       ------> at-first both the stack are empty
        
            enqueue(1)--------------> (add the element in the queue)
            if  s1 is empty 
                 add the value to the s1 stack  
         
             the stack becomes like this: 
        s1=[ 1 ]     s2=[]       ------> s1 have values 
*2           
            enqueue(2)--------------> (add the element in the queue)
            if  s1 is empty 
                 add the value to the s1 stack 
            else if s1 have values...
                push all values from s1 to s2 ,
                add the value to s1 ,
                and push every thing back to s1 ;

                {for now 
                        s1 have values: 
                    s1=[ 1 ]     s2=[ ]    
                        so pop from the s1 stack and push to s2 stack
                    s1=[ ]     s2=[ 1 ]  
                        now push the value to s1 stack (2)
                    s1=[ 2 ]     s2=[ 1 ] 
                       so pop from the s2 stack and push to s1 stack
                    s1=[ 2 , 1 ]     s2=[ ] 

                        s2 stack should always empty at the end

                }
        
             the stack becomes like this: 
        s1=[ 2 , 1 ]     s2=[]       ------> s1 have values 
*3          
            now enqueue(3)--------------> (add the element in the queue)
            if s1 have values...
                push all values from s1 to s2 ,
                add the value to s1 ,
                and push every thing back from s2 to s1 ;

                {for now 
                        s1 have values: 
                    s1=[ 1 , 2 ]     s2=[ ]    
                        so pop from the s1 stack and push to s2 stack
                    s1=[ 2 ]     s2=[ 1 ]  
 
                        :::::we still have value in s1 so , repeate the process untill the s1 is empty
                    
                    s1=[ 2 ]     s2=[ 1 ]    
                        so pop from the s1 stack and push to s2 stack
                    s1=[ ]     s2=[ 1 , 2 ]  

                        now push the value to s1 stack (3)
                    s1=[ 3 ]     s2=[ 1 , 2 ] 

                    so pop all the elements from the s2 stack and push to s1 stack  
                    s1=[ 3 , 2 , 1 ]     s2=[ ] 

                        s2 stack should always empty at the end

                }

    FOR DEQUEUEING :
        
        s1=[ 3 , 2 , 1 ]     s2=[ ] 

                just return the pop of the s1 stack 
        
        s1=[ 3 , 2 ]     s2=[ ] 

 */


class Queue{
    constructor(){ 
        this.s1= new Stack();
    }
    enqueue(value){
        let s2= new Stack();
        while(this.s1.length){
            s2.push(this.s1.pop());
        }
        this.s1.push(value);
        while(s2.length){
            this.s1.push(s2.pop());
        }
        return this.s1;
    }
    dequeue(){
        let res= this.s1.pop()
        return res ? res : null;
    }

}

///////////////////////////////////////////////////////////////
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
    //push method --- to add element in the end of the stack 
    push(val){
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
    //pop  --- to remove the recently added node/element from the stack
    pop(){
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
        this.length--;
        return removenode.val;
    }
}

let queue =new Queue;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue())//1
console.log(queue.dequeue())//2
console.log(queue.dequeue())//3
console.log(queue.dequeue())//4
console.log(queue.dequeue())//5
console.log(queue.dequeue())//6
console.log(queue.dequeue())//null ---> queue is empty

queue