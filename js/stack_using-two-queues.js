// ---------------------------------------Implementing STACKS Using QUEUES-----------------------------------
/*------ for code, jump to line 72 


  This method will Implement STACKS Using  two-QUEUES
    LETS the q1 and q2 queues
    q1=[]      q2=[]

    for pushing value 
    ex: push(1)
        q1=[ ]     q2=[ ]    -------//first, start with empty queue
        q1=[ 1 ]     q2=[ ]    -----//enqueue given value (1) to q1 queue
                    #no elements in q2 queue 
                        ..do nothing
                    #swap q1 to q2 and q2 to q1 queues --- at the end , q1 should always be empty queue 
         q1=[ ]     q2=[ 1 ]   -------becomes like this
     -----------------------------------------------------------------------------------------------
    ex: push(2)
        q1=[ ]     q2=[ 1 ]    -------// q2 have value from above push 
        q1=[ 2 ]     q2=[ 1 ]    -----//enqueue given value (2) to q1 queue
                    #now q2 have elements/values in it
                        ...
                        dequeue all the elemnts from the q2 and enqueue them to the q1 queue
                        (other words --- remove all the elements from the q2 {in FIFO order} and add them in the q1 )
                        {like this
                             q1=[ 2 ]     q2=[ 1 ]
                             q1=[ 2 , 1 ]     q2=[  ]   --dequeue from q2 (1) and enqueue the same value (1) to q1
                        }

        q1=[ 2 , 1 ]     q2=[  ]

                    #swap q1 to q2 and q2 to q1 queues --- at the end , q1 should always be empty queue 
        
        q1=[ ]     q2=[ 2 , 1 ]   -------becomes like this
    --------------------------------------------------------------------------------------------------
    ex : push(3)
    q1=[ ]     q2=[ 2 , 1  ]    -------// q2 have value from above push 
        q1=[ 3 ]     q2=[ 2 , 1 ]    -----//enqueue given value (3) to q1 queue
                    #now q2 have elements/values in it
                        ...
                        dequeue all the elemnts from the q2 and enqueue them to the q1 queue
                        (other words --- remove all the elements from the q2 {in FIFO order} and add them in the q1 )
                        {like this..
                             q1=[ 3 ]     q2=[ 2 , 1 ]
                             q1=[ 3 , 2 ]     q2=[ 1 ]   --dequeue from q2 (2) and enqueue the same value (2) to q1

                            we still have value in q2 , so repeat the process till the q2 becomes empty .
                            
                             q1=[ 3 , 2 ]     q2=[ 1 ]
                             q1=[ 3 , 2 , 1 ]     q2=[  ]   --dequeue from q2 (1) and enqueue the same value (1) to q1

                             now the q2 is empty
                        }

        q1=[ 3 , 2 , 1 ]     q2=[  ] 

                    #swap q1 to q2 and q2 to q1 queues --- at the end , q1 should always be empty queue 
        
        q1=[ ]     q1=[ 3 , 2 , 1 ]    -------becomes like this
    
        ---------------------//thats it pushing :)

        for popping value

        ---------- just dequeue the q2 queue :)


    
*/ 

//stack class defined ---------------------------------------------------
class Stack {
    //create two queues
    constructor(){
        this.q1 = new Queue;
        this.q2 = new Queue;
    }
    //push method
    push(val) {
        //enqueue the given value to q1 queue
        this.q1.enqueue(val);
        //loops till the q2 queue have any values in that
        while(this.q2.size>0)
            //enqueues the ( q2-queue's dequeue value ) to q1 queue   :)
            this.q1.enqueue(this.q2.dequeue());
        //swap the q1 and q2
        [this.q1,this.q2]=[this.q2,this.q1]
        return this.q2;
    }
    //popping function 
    pop() {
        //returns the q2 queue's dequeue .
        return this.q2.dequeue();
    }
}
//--------------------------------------------------------------------------
// QUEUE AND NODE HAVE BEEN IMPLEMENTED 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first == this.last) 
            this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack =new Stack();

stack.push('google');
stack.push('youtube');
stack.push('w3school');
stack.push('Gmail');
stack.push('github');
stack.push('udemy');

console.log(stack.pop());// udemy
console.log(stack.pop());// github
console.log(stack.pop());// Gmail
console.log(stack.pop());// W3school
console.log(stack.pop());// youtube
console.log(stack.pop());// google

//