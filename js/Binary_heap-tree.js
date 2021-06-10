//---------------------------------------------Max BINARY HEAP----------------------------------------
/** "Jump to line 94 for code"

Max BINARY HEAP is a kind of tree structure 
it's stores the elements as a array/list 

CONDITION ::
    * One parent node should have atmost two child node's
    * The child node's value should be less then the value of the parent node
    * left of the parent node should be filled first and then right 
    * If newly entered value is greater then the parent :
            * Compare the newly enters value with the value of it's parent node
            * if greater then the parent node :
                * then swap the parent nodes value and newly value 

EX:
    //           1000
    //          /    \
    //      500        300
    //     /   \       /   
    //   100    8    178     

    all child values are less then the parent values

    if we add 24 to the tree its adds in the last place
    
    //           1000
    //          /    \
    //      500        300
    //     /   \       /  \
    //   100    8    178   24


    if we add 1100 to the tree its adds in the last place
    //           1000
    //          /    \
    //      500        300
    //     /   \       /  \
    //   100    8    178   1100          1100 is greater then its parent  300 ---- so swap the greater child and parent

    It becomes
    //           1000
    //          /    \
    //      500       1100
    //     /   \       /  \             Again
    //   100    8    178   300          1100 is greater then its parent  1000 ---- so swap the greater child and parent


    It becomes
    //           1100
    //          /    \
    //      500       1000
    //     /   \       /  \            
    //   100    8    178   300     its satisfies the condition :)


    we use list/array to store the tree 
    
               1100
              /    \
          500       1000
         /   \       /  \            
       100    8    178   300 
       
             
       is store as   
arr  = [ 1100 , 500 , 1000 , 100 , 8 , 178 , 300 ]
index      0     1     2      3    4    5     6     

To find the parent-index of the child  :: fromula ::
                                                  Math.floor( (index-of-the-child - 1)/2 )
                                                  returns index of the parent 
EX :  find parent of the " 178 "    
        index of 178  ---------> 5
        (5-1)/2  ---------> 4/2 -----> 2
        Math.floor( (5-1)/2 ) -------> 2
        
        the parent of the arr[5] is arr[2] {178's  parent  is  1000  }  

To find the child of the parent  :: fromula :: 
                                         (index-of-parent*2)+1  for left value 
                                         (index-of-parent*2)+2  for right value   
                                         returns index of the childs

EX :  find child of the " 500 "    
        index of 500  ---------> 1
        (1*2)+1  ---------> 2+1 -----> 3 ------>arr[3]=>100 is the left value
        (1*2)+2  ---------> 2+2 -----> 4 ------>arr[4]=>8 is the right value
        
        the child of the arr[1] are arr[3] and arr[4]  {  500's  childs  are  100 and 8 }  

*/

//Max Binary heap class 
class Max_Binary_heap {
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
        //loop only if child is greater then parent  
        while (this.values[parent] < this.values[child]) {
            //swap the parent and child
            [this.values[child], this.values[parent]] = [this.values[parent], this.values[child]]
            //set child as the parent and find the parent
            child = parent;
            parent = Math.floor((parent - 1) / 2);
        }
    }
    //add method ------ to add a new values in tree
    add(val) {
        //return the list , if entered value is already present in values
        for (let i in this.values) { if (val === this.values[i]) return this.values; }
        //adds new-value to the values-arr [in end of the list]  
        this.values.push(val)
        this.bubbleup();
        return this.values;
    }
    //extractMax method --- removes the current root and re-arranges the tree to satisfies the Max-Binary heap condtitions
    extractMax() {

        let max,
            rootindex = 0,
            currentroot = this.values[rootindex];
        [this.values[rootindex], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[rootindex]];
        this.values.pop();

        let leftchild = (0 * 1) + 1,
            rightchild = (0 * 1) + 2;

        while (this.values[rootindex] < this.values[leftchild] || this.values[rootindex] < this.values[rightchild]) {
            if(leftchild<this.values.length-1 && leftchild<this.values.length-1 ){
                max = this.values[leftchild] > this.values[rightchild] ? leftchild : rightchild;
            }else {
                max=leftchild
            }
            [this.values[rootindex], this.values[max]] = [this.values[max], this.values[rootindex]];
            rootindex = max;
            leftchild = (max * 2) + 1;
            rightchild = (max * 2) + 2;

        }
        return currentroot;
    }




}

let heap = new Max_Binary_heap;

heap.add(67);//add new value in tree
heap.add(58);
heap.add(65);
heap.add(45);
heap.add(31);
heap.add(40);
heap.add(53);
heap.add(44);
console.log(heap.add(15));
// heap.add(53);//duplicate will not added
//output --------> [ 67 , 58 , 65 , 45 , 31 , 40 , 53 , 44 , 15  ]

 heap.extractMax();//   67    ----> tree bubbled-down [ 65, 58, 53, 45, 31, 40, 15, 44 ] 
 heap.extractMax();//   65    ----> tree bubbled-down [ 58, 45, 53, 44, 31, 40, 15 ] 
 heap.extractMax();//   58    ----> tree bubbled-down [ 53, 45, 40, 44, 31, 15 ] 
 heap.extractMax();//   53    ----> tree bubbled-down [ 45, 31, 40, 44, 15 ] 
 heap.extractMax();//   45    ----> tree bubbled-down [ 40, 31, 15, 44 ]
 heap.extractMax();//   40    ----> tree bubbled-down [ 31, 44, 15 ] 
 heap.extractMax();//   31    ----> tree bubbled-down [ 44, 15 ] 
 heap.extractMax();//   44    ----> tree bubbled-down [ 15 ]
 heap.extractMax();//   15   ----> tree bubbled-down  [  ]


//return the root value and bubbles down the tree


