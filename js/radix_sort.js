//---------------------------------------------RADIX SORTING--------------------------------------

/* 
Radix sort -> the way this algo works is differnt from the other algo  [like merge ,bubble,insertion,quick ,section]
cuz they works in the basic rule of camparing two elements [right >left or left < right] but in this sorting 
we don't compare elements instead we use different method for sorting the arr and this only works for number

[1590,22,2,345,65,78,5645,14,5456] ->unsorted arr

knowing that four digit number is always greater then two and three digit number [not comparing but general]
The large digit number in the arr which is --> 4 digit
ex----> 1590 number have four digit 
            1         5          9        0
         thousand's  hunderd's  ten's    one's  

ex----> 10  -- for 10 we have only two digit  
           1        0
          ten's    one's  

ex----> 356 number have three digit 
               3        5        6
           hunderd's  ten's    one's  


assume we have 10 buckes starting /namethem from zero to nine
order them by the one's digit to the bucket like

----------------------first digit [one's digit]

     1    1   1     1    1    1      1     1      1  -------> 1s digit
[ 1590 , 22 , 2 , 345 , 65 , 78 , 5645 ,  14 , 5456]
  
place them in the desired opsition  ---> 
    1590 ---> have one's digit --> 0 --> so place it in the 0 bucket
      22 ---> have one's digit --> 2 --> so place it in the 2 bucket
       2 ---> have one's digit --> 2 --> so place it in the 2 bucket
     345 ---> have one's digit --> 5 --> so place it in the 5 bucket
      65 ---> have one's digit --> 5 --> so place it in the 5 bucket
      78 ---> have one's digit --> 8 --> so place it in the 8 bucket
    5645 ---> have one's digit --> 5 --> so place it in the 5 bucket
      14 ---> have one's digit --> 1 --> so place it in the 1 bucket
    5456 ---> have one's digit --> 6 --> so place it in the 6 bucket

                                                             5645
                              2                                65
     1590         14         22                               345        5456                    78
  |--------|  |------- -| |--------| |--------| |--------| |--------| |---------| |--------| |---------|  |---------|
      0            1          2           3         4          5           6          7          8             9

after placed them in desired position the bucket looks like this 
then update the arr without changing the order of elements in  bucket 

arr = [1590,14,22,2,345,65,5645,5456,78]

----------------------now second digit [tens digit]

order them by the ten's digit to the bucket like

    2    2    2   2    2    2      2      2    2  -------> 2s digit
[ 1590 , 14 , 22 , 2, 345 , 65 , 5645 , 5456 , 78]
  
place them in the desired opsition  ---> 
    1590 ---> have ten's digit --> 9 --> so place it in the 9 bucket
      14 ---> have ten's digit --> 1 --> so place it in the 1 bucket
      22 ---> have ten's digit --> 2 --> so place it in the 2 bucket
       2 ---> have ten's digit --> 0 --> so place it in the 0 bucket
     345 ---> have ten's digit --> 4 --> so place it in the 4 bucket
      65 ---> have ten's digit --> 6 --> so place it in the 6 bucket
    5645 ---> have one's digit --> 4 --> so place it in the 4 bucket
    5456 ---> have ten's digit --> 5 --> so place it in the 5 bucket
      78 ---> have ten's digit --> 7 --> so place it in the 7 bucket


note /////// the tens digit for 2 is 0 and  if u dont have tens ,thousands, hunders in a number just put it in the 0 bucket   


                                                  5645             
      2            14         22                   345        5456        65         78                      1590 
  |--------|  |------- -| |--------| |--------| |--------| |--------| |---------| |--------| |---------|  |---------|
      0            1          2           3         4          5           6          7          8             9

after placed them in desired position the bucket looks like this 
then update the arr without changing the order of elements in the bucket 

arr = [ 2 , 14 , 22 , 345 , 5645 , 5456 , 65 , 78 , 1590 ]

    repeate the process for max digit times ::::
        if max digit is 4 digit [1590]  repeate the process for four times 
        (or) if max digit is 4 digit [150]  repeate the process for three times 
        number of process depend upon the max digit 


in this case by end of 4th process we get the sorted arr
[ 2 , 22 , 65 , 78 , 345 , 1590 , 5456 ]

*/


//helper function for finding the higher digit
function findhigherdigit(arr){
let highval=0
//loop the arr 
    for(let i of arr ){
        //assign the max value of  digit by converting the number to string and getting the length 
       highval=Math.max(highval,i.toString().length);
    }
    //return
    return highval;
}// findhigherdigit([ 2 , 22 , 65 , 78 , 345 , 1590 , 5456 ])  ----> returns 4 ;

//helper function for returning the required nth digit's in the number 
function nth_digitFinder(num,digit){
    /*math.floor()-------> roundsoff the number
    math.abs(-2) -----> 2  converts to pisitive number 
    math.pow(10,digit)------> 10 pow of digits  ---> pow(10,2)----> 10*10 --> 100
    (134/10)-->1.34
    1%10 ---> 1*/
  return  Math.floor(Math.abs(num)/Math.pow(10,digit)) %10;
} //nth_digitFinder(435,2) //---------> return 2 ;

function radix_sorting(arr){
    //using the helperfunction find higher digit number in the arr and store it
    let maxdigit = findhigherdigit(arr);
    //loop the process maxdigit times
    for(let i=0;i<maxdigit;i++){
        //create a array of 10 array to store the values like the bucket
        let bucket = [[],[],[],[],[],[],[],[],[],[]];
        //inner loop ,loops through the arr start to end
        for(let j=0;j<arr.length;j++){
            // store the value to bucket in the order of digits from  0 - 9 
            bucket[nth_digitFinder(arr[j],i)].push(arr[j]);
        }
        //change the arr with the updated index arr elements
        // ... speared operator helps to return array of array to one array 
        arr=[].concat(...bucket);
    }
    //return arr
    return arr
}

console.log(radix_sorting([ 1590 , 22 , 2 , 345 , 65 , 78 , 5645 ,  14 , 5456]));

//that's it :)