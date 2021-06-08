//It is used in Quick sort function 
//pivot function helps us to find the correct index of the given element in the arr

//comaparator function
function comparatorfunction(a,b){
    return a.length - b.length;
}
//pivot finder function 
function findpivot(arr,func){
    //to find pivot of the first element in the arr 
    let pivitelem = 0 ;
    let swapindex = pivitelem;
    //swap function 
    function swap(arr,a,b){
        [arr[a],arr[b]]=[arr[b],arr[a]]
    }
    //loops from piviteleme index + 1 to the end  
    for(let i =pivitelem+1 ; i<arr.length;i++){
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

console.log(findpivot([4,7,2,8,3,5,1],0,6));//3
console.log(findpivot(['************','********','****','****************'],0,3,comparatorfunction));//2
console.log(findpivot(['55555','4444','1','333','999999999','7777777'],0,5,comparatorfunction));// 3

