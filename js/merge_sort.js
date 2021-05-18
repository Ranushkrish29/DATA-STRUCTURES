// --------------------------------MERGE-SORTING-----------------------------------

//define a helper funciton , which merges two sorted arr to a single sorted arr 
function mergeTwoarr(arr1,arr2){
    //arr to return the result finaly
    let result=[];
    //pointers for the arr1 and arr2 
    var p1=0,p2=0;
    //loop until the p1 + p2  is lesser then length of both arr
    while((p1+p2) < (arr1.length+arr2.length)){
        //campare and push the small value to the result and increament the pointer
        if(arr1[p1]<=arr2[p2]){
            result.push(arr1[p1]);
            p1++;
        }else if(arr1[p1]>arr2[p2]){
            result.push(arr2[p2]);
            p2++;
        }
        //if dont have value to compare just push all the remaining values to the result of arr1 /arr2
        else if(arr1.length!==p1){
            result.push(arr1[p1]);
            p1++;
        }else if(arr2.length!==p2){
            result.push(arr2[p2]);
            p2++;}
        }
    return result;
}
//main function , which is use to divide the arr to indiviual arr
function merger_sort(arr){
    //base condition toend the recursion 
    //if arr length  is 1 or 0 return arr
    if(arr.length<=1 ) return arr;
    var mid = Math.floor(arr.length/2);
    //recurse the first-half of the arr untill the length is 1
    var left = merger_sort(arr.slice(0,mid));
    //recurse the second-half of the arr untill the length is 1
    var right =merger_sort(arr.slice(mid));
    //merge the two arr using the  helper function
    return mergeTwoarr(left,right);
}

console.log(merger_sort([23,1,13,35,16]));

