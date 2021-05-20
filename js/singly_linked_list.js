//--------------------------------------------------SINGLY LINKED LIST------------------------------------------------

/* user difined data structure to store a number of elemets in efficient way 


this singly linked list is a combination of nodes . each node is pointing to the next node {next value} 
each node have a value and pointer to next node
if there is no node to point at end, the end node is  set to null 

this list have a head and tail to track the first and last element of the list 
head is pointing to the first element and tail is the last element in the list


   12
   head =12
   tail=12  //both are same position

   12  --- >  13   
   head =12
   tail=13  // now the tail is set to the new node which is push to the list

   12  --- >  13 ------> 14
   
   head =12
   tail=14  // now the tail is set to the new node which is push to the list

   this is how we track the last element
   
*/
//create a class node to store the current value pointer to the next node
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
//create a SinglyLinkedlist class which uses the node calss to do the operations 
class SinglyLinkedlist{
    //at first the head ,tail ,length is set to zero // constructor get executed automaticaly when the class is inti 
    constructor(){
        this.head=null;
        this.tail=null;
        this.length =0;
    }
    //push method -add a new value to end 
    push(val){
        //create a new node by node class and store the value
        let newnode= new Node(val)
        //if there is node {otherwise EMPTY-list}
        if(!this.head){
            //point the head to the newly created node
            this.head=newnode;
            //and point the tail to same node
            this.tail=this.head;
            /* like this
                []    ----> if list have no element then
                add a new node to the list [23] 
                head=23 and tail=23 // both are points to the same node
             */
        }
        //if there is a node {otherwise  list have elements }
        else{
            //set the tail.next points the newly created node 
            this.tail.next=newnode;
            // and set the tail to the new node
            this.tail=newnode;
            /* like this
                23  34  ----> if list have  element then
                head=23 and tail=34 // both are points to the same node
             */
        }
        //increament the length by 1
        this.length++;
        //return the list by this 
        return this;
    }
    //traversal method - from start to end
    traversal(){
        //get the head node {which is the first node} and set it as current node
        let currentnode=this.head;
        //loop untill the current node is true if there is no current node exit the loop
        while(currentnode){
            //print the value of the current node 
            console.log(currentnode.val);
            //update the current node to the currentnodes next-node pointer [which is first nodes pointer to second node]
            currentnode=currentnode.next;
        }
        //return the list
        return this
    }
    //pop method - remove the last element from the list [which is tail node]
    pop(){
        //store the first element in the list and previouselement as the first element 
        let currentnode=this.head;
        let previousnode =currentnode;
        //if there is no element {node} in the list then return undiefine 
        if(!currentnode)return undefined;
        //loop untill the  node which have no node after then{tail node}
        while(currentnode.next){
            //set prev node  to currentnode and update the currentnode by currentnode.next
            previousnode=currentnode;
            currentnode=currentnode.next;
        }
        //set the tail to the previousnode [which is last eleemnt -1] and previousnode.node =null 
        this.tail=previousnode;
        previousnode.next=null;
        //if list have only one element then head and tail = null
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        //decreament length
        this.length--;
        return currentnode.val
    }

    //shifting method -- delete the first element in  the list  {delete head node and repoint to the next node}
    shifting(){
        //store the current head
        let currenthead = this.head;
        //if no element in list return undefined
        if(!currenthead)return undefined;
        //if list have only one element then head and tail = null
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        //else -> changer the this.head to currenthead.next {which is next node of the current node} and decreament the length
        this.head=currenthead.next;
        this.length--;
        //return the first heads value
        return currenthead.val;
    }

    //unshifting method -- add a new element in the beginning of the list {create new node and point it to the current head and make the new node as the head  }
    unshifting(val){
        //create  a new node with the value
        let newhead = new Node(val);
        //if list have no element then point the head and tail to the newhead
        if(this.length===0){
            this.head=newhead;
            this.tail=this.head;
        }else{
        // else point the newhead.next to the current head 
        newhead.next= this.head;
        //then set the newhead to the current head and increament the length 
        this.head=newhead;}
        this.length++;
        //return the list
        return this;
    }
    //get method --- return the value in the given index
    get(index){
        //if index is greater then lenght or lesser then 0 return undefined
        if(index>this.length || index<0)return null;
        //store the current node , use the counter i
        let i =0 ,currentnode = this.head;
        //loop if u have curretnode 
        while(currentnode){
            //return the value of currentnode if i === index 
            if(i===index)return currentnode;
            //update the currentnode to the currentnode.next and increament the i
            currentnode=currentnode.next; i++;
        }
    }
    //set method --- change the value of the element in the specified index
    set(index,val){
        //get function return the specified indexed node
        let foundnode = this.get(index);
        //if the node is present then udapte the node.val to given value and return true
        if(foundnode ){foundnode.val=val ;return true;}
        else return false;
    }

    //insert method ---insert new node in the specified index
    insert(index,val){
        //create a new node with the given value
        let newnode = new Node(val);
        //if index > length or smaller then zero then return false
        if(index>this.length||index<0){
            return false;
        }
        //if index is equal to 0 then add a new element in front {use unshifting method}
        if(index===0){
            this.unshifting(val);
            return true
        }else 
        //if index is equal to length then add a new element in last {use push method }
        if(this.length===index){
            this.push(val);
            return true
        }
        //get method return the specified indexed node 
        //store the index -1 node in previous
        let previousnode = this.get(index-1);
        //store index node in next node
        let nextnode =previousnode.next;
        //point the previous node --> to the new node and point new node ----> to the next node
        previousnode.next= newnode; 
        newnode.next= nextnode; 
        //increament the length
        this.length++;
        return true; 
    }
    //remove method -- removes the element in specified list
    remove(index){
        //if index > length or smaller then zero then return false
        if(index>=this.length||index<0){
            return undefined;
        }
        //if index is equal to 0 then add a new element in front {use unshifting method}
        if(index===0){
            return this.shifting();
            
        }else 
        //if index is equal to length then add a new element in last {use push method }
        if(this.length===index-1){
            return this.pop();
            
        }
        //store the index-1 node as pervious and index-node[to be removed node] as a deletenode
        let previousnode = this.get(index-1);
        let deletenode = previousnode.next;
        //point the previous node ------> deletenodes.next 
        /*  [ 12  ----> 34 -----> 45]  set the pointer of 12 ---> to point the 45  // instead of 34 
            [ 12  -----> 45]   
        */
        previousnode.next=deletenode.next;
        //decreament the list return the value
        this.length--;
        return deletenode.val;

    }
    //reverse --reverse the list 
    reverse(){
        let currentnode = this.head;
        let prevnode=null;
        let nextnode;
        //swap the head and tail
        [this.head ,this.tail]=[this.tail ,this.head]
        //loop the process, length of list times 
        for(let i=0;i<this.length;i++){
            //set next-node to current-node's next 
            nextnode = currentnode.next;
            //set current-node's next  to previous node 
            currentnode.next=prevnode;
            //set previous-node to current-node
            prevnode=currentnode;
            // set current node to nextnode
            currentnode=nextnode;
        }
        //return list
        return this
    }
}

let list = new SinglyLinkedlist;

list.push(1);//add new element to the end 
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.traversal();//traversal the list
list.pop();//delete the last element {tail node}
list.shifting();//deleter the first element {head node}
list.unshifting(0);//add new value to the beginning {new head node}
list.get(4);//get the value in nth[4th] index
list.set(2,31)//change the value of nth[4th] element to given value {31} 
list.insert(5,55);//insert new element in the nth[5th] place with the given value {55}
list.remove(1);//remove the nth[1th] element from the list
list.reverse();//reverse the list



//------------------------------------------the end of Singly-Linked-List --------------------------------------