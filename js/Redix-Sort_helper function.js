/////------------------------Radix Sort Helper Function------------------------


//returns the required digit from the number -- like  ---  1's ,10's ,100's 
function getDigit(num, i) {
    num=num.toString();
    let index = (num.length-1)- i;
    return num[index] ? parseInt(num[index]) : 0 ;
  }
//returns the total digit count of the given number  --like ---123 --> 3 
  function digitCount(num) {
    num= num.toString();
    return num.length;
  }
//returns the most digit from the list of numbers
function mostDigits(nums) {
      let max = 0 ;
      for(let i=0 ;i<nums.length;i++){
          max=Math.max(max,digitCount(nums[i]));
      }
      return max;
  }

console.log(getDigit(12345,0));//
console.log(digitCount(123));
console.log(mostDigits([12,222,55555,435343,2]));