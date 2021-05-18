//-------------------------------QUICK SORTING-------------------------

/*this sorting takes a random number from the arr [in-this-case i always take the first element of arr , arr[0]] and set it as a pivit 
 
loop through the  arr and swap the elements to left if element is less then pivit 
 (other words)
 comparing the current pivit element with the other elements in the arr through looping
 push the small elements to the left , increment the pivitindex by 1  and  greater elements to the right
 and find the correct spot for the current pivit in the arr   
 repeat the process for the all the elements

        [4,7,2,8,3,5,1]   pi->4    and   swapid = 0
        loop the arr from index 1
        [4,7,2,8,3,5,1]   arr[i] -> 7  ---- campare arr[i]<pi  -->nothing happens noe cuz arr[i] is larger then pi 
        [4,7,2,8,3,5,1]   arr[i] -> 2  ---- campare arr[i]<pi  --> now the condition is true and swap the elements ,increament the swapindex
        [4,2,7,8,3,5,1]   arr[i] -> 8  ---- campare arr[i]<pi  -->nothing happens noe cuz arr[i] is larger then pi 
        [4,2,3,8,7,5,1]   arr[i] -> 3  ---- campare arr[i]<pi   --> now the condition is true and swap the elements ,increament the swapindex
        [4,2,3,1,7,5,8]   arr[i] -> 5  ---- campare arr[i]<pi   -->nothing happens noe cuz arr[i] is larger then pi 
        [4,2,3,1,7,5,1]   arr[i] -> 1  ---- campare arr[i]<pi   --> now the condition is true and swap the elements ,increament the swapindex

   then swap the arr[swapindex] with arr[0 which is the start]
    [1,2,3,4,7,5,8]
repeat the process :)
*/
//define a helper function to return the PIVIT-index of the first element in the  arr
//which accepts three argu arr, start, end;

function pivitfinder(arr,start,end){
    function swap(i1,i2){
        [arr[i1],arr[i2]]=[arr[i2],arr[i1]];
    }
    //let first element in arr/sub arr is pivit 
    let pivit=arr[start];
    //the pivit index 
    let swapin =start;
    //loop the arr from start to end
    for(let i=start+1;i<end+1;i++){
        //compare pivit and arr[i] if true increament the pivit index and swap the values of arr[swap index] with arr[i] 
        if(pivit>arr[i]){
            swapin++;            
            swap(swapin,i);
        }        
    }
    //swap the arr[start] with the arr[swapin]
    swap(start,swapin);
    //return pivit index
    return swapin;
}
//testing pivitfinder([4,7,2,8,3,5,1],0,6)


// //main Qick merge function accepts an arr
function quick_sort(arr,left=0,right=arr.length-1){
    //only if left < right :: base case for the recursion
    if(left<right){
        //return the index of the current pivit value 
        let pivitindex= pivitfinder(arr,left,right);
        //recursion 
            //left arr start from 0 and ends in pivitindex -1 
            quick_sort(arr,left,pivitindex-1);
            //left arr start from 0 and ends in pivitindex -1
            quick_sort(arr,pivitindex+1,right);
     }
     //return 
     return arr;
}

//output
console.log(quick_sort([4,7,2,8,3,5,1]));