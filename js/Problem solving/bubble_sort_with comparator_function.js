
function strcomp(a,b){
    if(a>b) return true;
    return false;
}

function bubble_sort(arr1,strcompfun) {
    //define a bool to make sure not sorting the already sorted array
    var endswap;
    //loops from end to start of the arr
    for (var i = arr1.length - 1; i >= 0; i--) {
        //always stays ture
        endswap = true;
        //inner loop ,loops from start to i-1 
        for (var j = 0; j < i; j++) {
            // arr[i] > arr[i+1] then swap the value
            if ( strcompfun(arr1[j] ,arr1[j + 1])) {
                [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
                endswap = false;
            }
        }
        // if the swap never happes in the loop, break the loop
        if (endswap) break;
    }
    return arr1;
}
console.log(bubble_sort(['b','z','d','f','k','a'],strcomp));// [ 'a', 'b', 'd', 'f', 'k', 'z' ]
console.log(bubble_sort([ 100,99,87,65,43,32,21,0,-2],strcomp));// [ -2, 0, 21, 32, 43, 65, 87, 99, 100 ]
