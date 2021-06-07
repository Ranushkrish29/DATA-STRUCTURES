//comparator function 
function strComp(a,b){
    if (a>b) return true;
    return false;
}
//main selection sort function
function  selectionsort(arr,strcmp){
    //loop form the start to end
    for(let i =0 ;i<arr.length;i++){
        //set the arr[i] as the min --fornow
        let min =arr[i]
        //loop form the i to end
        for(let j =i+1;j<arr.length;j++){
            //find the small value in the arr
            //use the comparator function to return true if min is greater then arr[j]
            if(strcmp(min,arr[j])){
                    //update the min to the new min value in the arr 
                    min=arr[j];
                    //swap the arr[i] and arr[j]
                    [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        } 
    }
    return arr
}

console.log(selectionsort([ 'e', 'd', 'e', 'f', 'b', 'a' ],strComp));//[ 'a', 'b', 'd', 'e', 'e', 'f' ]
console.log(selectionsort([ 100,99,87,65,43,32,21,0,-2],strComp));// [ -2, 0, 21, 32, 43, 65, 87, 99, 100 ]
console.log(selectionsort([ 4,20,12,10,7,9],strComp));//[ 4, 7, 9, 10, 12, 20 ]

