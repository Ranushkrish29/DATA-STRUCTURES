//---------------------------------INSERTION SORTING-------------------------

function insertion_sort(arr) {
    //loops the arr from index 1 to end  
    for (var i = 1; i < arr.length; i++) {
        //store the current arr[i] 
        var currentval = arr[i];
        //inner loop ,loops from end [which is the i-1] to start [0]  
        //and it have a condition , currentval should be less then the arr[j]
        for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
            arr[j + 1] = arr[j];
        }
        //set the currentval to the desired position
        arr[j + 1] = currentval;
    }
    return arr;
}
console.log(insertion_sort([23, 1, 13, 35, 16]));

