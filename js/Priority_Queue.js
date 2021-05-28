//---------------------------------------------PRIORITY QUEUE----------------------------------------
/** "Jump to line 39 for code"

PRIORITY QUEUE is a kind of heep structure 
it's stores the elements as a array/list 

CONDITION ::
    * One parent node should have atmost two child node's
    * The child node's priority should be less then the priority of the parent node
    * left of the parent node should be filled first and then right 
    * If newly entered value have priority greater then the parent :
            * Compare the newly enters priority with the priority of it's parent node
            * if greater then the parent node :
                * then swap the parent nodes priority and newly priority 


IMPORTANT --->!!!!!!!!!!!!!!

                //***** Higher priority are represented as small numbers    //////
                //***** low priority are represented as big numbers         ///////
                1------> high priority
                2 ------> less priority then 1
                3 ------> less priority then 2
                4 ------> less priority then 3
                5   -----> as the values goes up the priority becomes lesser

EX:
    //             1
    //          /    \
    //        5        3               5 and 3 less priority then 1 
    //      /   \     /  \              
    //     10    8   17   20           10 and 8 less priority then 5  , 17 and 20 less priority then 3
    
    all child prioritys are less then the parent prioritys


*/

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

//PRIORITY QUEUE class 
class Priority_Queue {
    // value arr to store the tree
    constructor() {
        this.values = [];
    }
    //to bubble up the values to the correct place
    bubbleup() {
        //store last-value's index {recently added value} as the child
        let child = this.values.length - 1,
            //find the parent's index of the child
            parent = Math.floor((child - 1) / 2);

        if (this.values[parent] === undefined) return this.values;

        //loop only if child have greater priority then parent  
        while (this.values[parent].priority > this.values[child].priority) {
            //swap the parent and child
            [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]]
            //set child as the parent and find the parent
            child = parent;
            parent = Math.floor((parent - 1) / 2);

            if (this.values[parent] === undefined) return this.values;

        }
    }
    //add method ------ to add a new values in tree
    enqueue(val, priority) {
        let newnode = new Node(val, priority);
        //return the list , if entered value is already present in values
        for (let i in this.values) { if (val === this.values[i].priority) return this.values; }
        //adds new-value to the values-arr [in end of the list]  
        this.values.push(newnode)
        this.bubbleup();
        return this.values;
    }
    //dequeue method --- removes the current root and re-arranges the heap to satisfies the priority queue condtitions
    dequeue() {
        let min,
            rootindex = 0,
            currentroot = this.values[rootindex];
        [this.values[rootindex], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[rootindex]];
        this.values.pop();

        let leftchild = (0 * 1) + 1,
            rightchild = (0 * 1) + 2;

        if (this.values[rootindex] === undefined) return null;
        else if (this.values[leftchild] === undefined || this.values[rightchild] === undefined) return currentroot;

        while (this.values[rootindex].priority > this.values[leftchild].priority || this.values[rootindex].priority > this.values[rightchild].priority) {
            min = leftchild < this.values.length - 1 && leftchild < this.values.length - 1 ? this.values[leftchild].priority < this.values[rightchild].priority ? leftchild : rightchild : leftchild;
            [this.values[rootindex], this.values[min]] = [this.values[min], this.values[rootindex]];
            rootindex = min;
            leftchild = (min * 2) + 1;
            rightchild = (min * 2) + 2;
            if (this.values[leftchild] === undefined || this.values[rightchild] === undefined || this.values[rootindex] === undefined) return currentroot;
        }
        return currentroot;
    }
}

let priority = new Priority_Queue;

priority.enqueue("p8", 8);//add new value in priority queue
priority.enqueue("p7", 7);
priority.enqueue("p6", 6);
priority.enqueue("p5", 5);
priority.enqueue("p4", 4);
priority.enqueue("p3", 3);
priority.enqueue("p2", 2);
priority.enqueue("p1", 1);


priority.dequeue();// Node { value : 'p1' , priority : 1 }
priority.dequeue();// Node { value : 'p2' , priority : 2 }
priority.dequeue();// Node { value : 'p3' , priority : 3 }
priority.dequeue();// Node { value : 'p4' , priority : 4 }
priority.dequeue();// Node { value : 'p5' , priority : 5 }
priority.dequeue();// Node { value : 'p6' , priority : 6 }
priority.dequeue();// Node { value : 'p7' , priority : 7 }
priority.dequeue();// Node { value : 'p8' , priority : 8 }
priority.dequeue();// null ---> no elements in the queue




