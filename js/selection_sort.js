//-----------------------SECTION SORTING-----------------------------------------

function section_sort(arr) {
    var lowval;
    //loop the arr from start to end
    for (var i = 0; i < arr.length; i++) {
        //store the first val as the lowest value [for the comparison]
        lowval = i;
        // inner loop ,loops from i+1 to end of arr to find the lowest in the list
        for (var j = i + 1; j < arr.length; j++) {
            //compare the lowvel and arr[j] to find the lowest and 
            //store it as a new lowvel
            if (arr[lowval] > arr[j]) lowval = j;
        }
        //swap only if i is different from the lowval
        if (i !== lowval) [arr[i], arr[lowval]] = [arr[lowval], arr[i]];
    }
    return arr;
}
console.log(section_sort([23, 1, 13, 35, 16]));