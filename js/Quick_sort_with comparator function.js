
// //comaparator function

function comparatorfunction(a,b){
    return a.length - b.length;
}

//pivot finder function 
function findpivot(arr,func ,start,end){
    //to find pivot of the first element in the arr 
    let pivitelem = start;
    let swapindex = pivitelem;
    //swap function 
    function swap(arr,a,b){
        [arr[a],arr[b]]=[arr[b],arr[a]]
    }
    //loops from piviteleme index + 1 to the end  
    for(let i =pivitelem+1 ; i<=end;i++){
        //check comparator function is given ,if true.. 
        if(typeof func ==='function'){
            if(func(arr[pivitelem],arr[i]) > 0 ){
                swapindex++;
                swap(arr,swapindex,i);
            }    
        }else{//if false..
            //if arr[piviteleme] is greater than the arr[i]
            if(arr[pivitelem]>arr[i]){
                swapindex++;
                swap(arr,swapindex,i);
            }
        }
    }
    //swap the swapindex and pivitelem 
    swap(arr,swapindex,pivitelem);
    return swapindex;
}
// //main Qick merge function accepts an arr
function quick_sort(arr,func, left = 0, right = arr.length - 1) {
    //only if left < right :: base case for the recursion
    if (left < right) {
        //return the index of the current pivit value 
        let pivitindex = findpivot(arr,func, left, right);
        //recursion 
        //left arr start from 0 and ends in pivitindex -1 
        quick_sort(arr, func,left, pivitindex - 1);
        //left arr start from 0 and ends in pivitindex -1
        quick_sort(arr,func, pivitindex + 1, right);
    }
    //return 
    return arr;
}

console.log(quick_sort(['55555','4444','1','333','999999999','7777777'],comparatorfunction))//[ '1', '333', '4444', '55555', '7777777', '999999999' ]  
console.log(quick_sort([4,7,2,8,3,5,1]));// [ 1, 2, 3, 4, 5, 7, 8 ]



