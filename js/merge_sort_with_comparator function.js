function oldesttoYoungest(a, b) {
    return b.age - a.age;
}

function mergetwoarr(arr1, arr2, compafunction) {
    let pointer1 = 0,
        pointer2 = 0,
        resultarr = [];
    //only true if both the pointer1 and pointer2 is less the arr1.lenght and arr2.length
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        //check campafunction is function or undefind ,if true.. 
        if (typeof compafunction === 'function') {
            if (compafunction(arr1[pointer1], arr2[pointer2]) > 0) {
                resultarr.push(arr1[pointer1]);
                pointer1++;
            } else if (compafunction(arr1[pointer1], arr2[pointer2]) < 0) {
                resultarr.push(arr2[pointer2]);
                pointer2++;
            }
        }//if false..
        else {
            if (arr1[pointer1] <= arr2[pointer2]) {
                resultarr.push(arr1[pointer1]);
                pointer1++;
            } else {
                resultarr.push(arr2[pointer2]);
                pointer2++;
            }
        }
    }
    //push to the list if arr1 have pending elements
    while (pointer1 < arr1.length) {
            resultarr.push(arr1[pointer1]);
            pointer1++;
    }
    //push to the list if arr2 have pending elements
    while (pointer2 < arr2.length) {
            resultarr.push(arr2[pointer2]);
            pointer2++;
    }
    //return
    return resultarr;
}
//main merge sort function
function mergesort(arr, fun) {
    //base case for the recursion 
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    //left side (start,mid)
    let leftarr = mergesort(arr.slice(0, mid), fun);
    //left side (mid,end)
    let rightarr = mergesort(arr.slice(mid), fun);
    //
    return mergetwoarr(leftarr, rightarr, fun)
}

console.log(mergesort(['zsd','ranu', 'abc','abc']));

let newobejct = [
    {
        name: 'ranush',
        age: 7
    }, {
        name: 'krishna',
        age: 40
    }, {
        name: 'arun',
        age: 45
    }, {
        name: 'priya',
        age: 1
    }, {
        name: 'shanu',
        age: 6
    }
];

console.log(mergesort(newobejct, oldesttoYoungest))

