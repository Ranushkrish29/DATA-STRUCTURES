//----------------------------------Doubly LINKED LIST--------------------------------------------

/*
  doubly linked list is same as the singly linked list but instead of pointing next node
  it points both the next and previous nodes 
     

  Singly linked list :

        1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 ->null 

        each element/node points the next element/node  
        singly linked list is one direction flow -> or <-

where as Doubly linked list : 

        null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7 <-> 8 -> null 

        each element/node points the next element/node and its previous element/node
        Doubly linked list is two direction flow  <->

 */


//like, singly linked list we have a node class to store the value and its pointer to the next node and previous node

class node{
    constructor(val) {
        //store the value , pointer to the next node and pointer to the prev node
        this.prev=null;
        this.val =val;
        this.next=null;
        
    }
}
//main Doubly linked list 
class doubly_linked_list{
    constructor() {
        //to store the first element in head and last element in tail and length of the nodes
        this.head =null;
        this.tail=null;
        this.length=0
    }
    //push method-- adds new value to the end 
    push(val){
        //create a new node of val and store it as new-end-node
        let newendnode = new node(val);
        //if list empty set both the head and tail to new node
        if(this.length===0){
            this.head=newendnode;
            this.tail=newendnode;
        }//else (--list have elements--)  
        else{
            //store the curren-tail    
            let currenttail =  this.tail;
            //set point current-tail.next to new-end-node 
            currenttail.next = newendnode;
            //and new-end-node.prev to curreent-tail
            newendnode.prev=currenttail;
            //then store the new-end-node as the new tail
            this.tail=newendnode;
        }
        //increament the length and return  the list
        this.length++
        return this;
    }
    //pop method  --remove the last element/node and return it 
    pop(){
        //store the current tail
        let nodetoremove = this.tail;
        //if list is empty return undefine
        if(this.length===0)return undefined;
        //if list have only one element then set head and tail to null
        if(this.length==1){
            this.head=null;
            this.tail=null;
        }else{
            //update tail to last node's previous node { which is node-to-remove's previous nodes } 
            this.tail=nodetoremove.prev;//this becomes current code
            //set current tail's next to null
            this.tail.next=null;
            //set node-to-remove {which is old tail} to null 
            nodetoremove.prev=null;
            }
        //decreament the length and return the old tail's value
        this.length--;
        return nodetoremove.val
    }
    //shift method -- delete the first element/node and returns it
    shift(){
        //store the current head node and store it as node-to-remove-start
        let nodetoremovestart = this.head;
        //if list is empty return undefine
        if(this.length===0)return undefined;
        //if list have only one element then set head and tail to null
        if(this.length==1){
            this.head=null;
            this.tail=null;
        }else{
            //update head node to node-to-remove-start's//first-node's next node {which is current head's next node} 
            this.head=nodetoremovestart.next;
            //set current head prev t null
            this.head.prev=null;
            //set old head's next to null
            nodetoremovestart.next=null;
        }
        //decreament the length and return the old tail's value
        this.length--;
        return nodetoremovestart.val
    } 
    //unshift method --add new node/element to the beginning 
    unshift(val){
        //create a new node of val and store it as new-head-node
        let newheadnode = new node(val);
        //if list is empty , set both the head and tail to new node
        if(this.length===0){
            this.head=newheadnode;
            this.tail=newheadnode;
        }//else (--list have elements--)
        else{
            //set the new-head-node's next as current head 
            newheadnode.next=this.head;
            //set the current head's previous as new-head-node 
            this.head.prev=newheadnode;
            //update the current head as new-head-node
            this.head=newheadnode;
        } 
        //increament the lenght and return the list 
        this.length++;
        return this
    }
    //helperfunction to return the specified node
    getnode(index){
        //check ,given index is in limit or else return false
        if(index>this.length-1||index<0)return false;
        //if given index  less then or equal to  half size of the total nodes length // then traverse the node from start to end  
        if(index<=this.length/2){
            //store the current head as current node
            let currentnord=this.head;
            //loop -->start to half of the total length
            for(let i=0;i<=this.length/2;i++){
                //if found return then node
                if(i===index)return currentnord;
                //update the current node to current node's next
                currentnord=currentnord.next
            }
        }// else , traverse the node from end to start
        else{
            //store the current tail as current node
            let currentnord=this.tail;
            //loop --> from end to half-of-the-total-length   
            for(let i=this.length-1;i<this.length;i--){
                //if found return then node
                if(i===index)return currentnord;
                //update the current node to current node's prev
                currentnord=currentnord.prev
            }
        }
    }
    //get method --//get the value in specified[nth] node
    get(index){
        //get the specified node using the getnode helper method
        let specifiedindexnode = this.getnode(index)
        //return the value of the specified node 
        return specifiedindexnode.val ;
    }
    //set method ---//change the value of the specified[nth] node
    set(index,value){
        //get the specified node using the getnode helper method
        let specifiedindexnode = this.getnode(index)
        //return the value of the specified node 
        specifiedindexnode.val=value;
        return this;
    }
    //insert method ---insert the new element/node at specified index
    insert(index,value){
         //check ,given index is in limit or else return false
         if(index>this.length||index<0)return false;
         //if index = 0 call the unshift method --add new element in beginnning
         if(index===0) {this.unshift(value);return true;}
         //if index = length-of-total-node call the push method --add new element in end
         if(index===this.length) {
             this.push(value);return true;
            }
        //create a new node and store it as new-node-to-insert
        let newnodetoinsert =new node(value);
        //store the specified index node as specified-index-node
        let specifiedindexnode =this.getnode(index);
        //store the specified-index node's previous node as specified-index-node-prev  
        let specifiedindexnode_prev = this.getnode(index-1);
        //set specified-index-node-prev next to the new node to insert {which is newly created node}
        specifiedindexnode_prev.next=newnodetoinsert;
        //set new-nodes-to-insert's prev to specifiedindexnode_prev
        newnodetoinsert.prev=specifiedindexnode_prev;
        // set new-node-to-insert's next{which is newly created node's next}  to specified-index-node 
        newnodetoinsert.next=specifiedindexnode;
        //set specifiedindexnode prev to  new-nodes-to-insert 
        specifiedindexnode.prev=newnodetoinsert;
        return this
    }
    
    
    //remove method ---remove the element/node at specified index
    remove(index){
        //check ,given index is in limit or else return false
        if(index>this.length||index<0)return false;
        //if index = 0 call the unshift method --add new element in beginnning
        if(index===0){return this.shift(index);}
        //if index = length-of-total-node call the push method --add new element in end
        if(index===this.length-1) {
            return this.pop();
           }
        //store the specified index node as specified-index-node
       let specifiedindexnode =this.getnode(index);
       //store the specified-index node's previous node as specified-index-node-prev  
       let specifiedindexnode_prev = specifiedindexnode.prev;
       let specifiedindexnode_next = specifiedindexnode.next;
        specifiedindexnode_next.prev=specifiedindexnode_prev;
        specifiedindexnode_prev.next=specifiedindexnode_next;
        specifiedindexnode.next=null;
        specifiedindexnode.prev=null;
        this.length--;
       return specifiedindexnode
   }


traversal() {
        //get the head node {which is the first node} and set it as current node
        let currentnode = this.head;
        let list =[]
        //loop untill the current node is true if there is no current node exit the loop
        while (currentnode) {
            //print the value of the current node 
            console.log(currentnode.val);
            list.push(currentnode.val);
            //update the current node to the currentnodes next-node pointer [which is first nodes pointer to second node]
            currentnode = currentnode.next;
        }
        //return the list
        
        return list;
    }

    //reverse method 
    reverse(){
        //swap the head and tail 
        [this.head,this.tail]=[this.tail,this.head]
        //store the current tail
        let currentnode = this.tail;        
            //        [ 0   , 1  ,   2 ]
            //  null <- c ->  1
            //    1  <- c -> null
            //                                            1 <- 0 -> null
            //        [ 0   , 1  ,   2 ]
            //          0 <-  c  ->  2
            //          2 <-  c  -> 0
            //                                           2 <- 1 <-> 0 -> null
            //        [ 0   , 1  ,   2 ]
            //                1  <-  c  ->  null
            //              null <-  c  -> 1
            //                                          null <- 2 <-> 1 <-> 0 -> null

        while(currentnode){
            //swap the current node's  prev and next
            [currentnode.prev, currentnode.next]=[currentnode.next, currentnode.prev]
            //update the current node to current node's prev 
            currentnode=currentnode.prev
        }
        //return the list
        return this
    }
}

//null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7 <-> 8 -> null 
//create a instances for the class DLL
let list = new doubly_linked_list();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.pop();//delete the last element {tail node}
list.shift();//deleter the first element {head node}
list.unshift(0);//add new value to the beginning {new head node}
list.get(4);//get the value in nth[4th] index
list.set(2, 31)//change the value of nth[4th] element to given value {31} 
list.insert(5, 55);//insert new element in the nth[5th] place with the given value {55}
list.remove(1);//remove the nth[1th] element from the list
console.log(list.traversal());//traversal the list
list.reverse();//reverse the list
console.log(list.traversal());


//------------------------------------------the end of Doubly-Linked-List --------------------------------------
