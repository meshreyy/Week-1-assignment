/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
   var normal = str.toUpperCase();
  //normalized
  
  //reversed
  var convert = str.toUpperCase();
  convert = convert.split('').reverse().join('');
  
  

  if(normal==convert)
  {
    return true;
  }
  else
  {
    return false;  
  }
}

var answer = isPalindrome("Nan");
console.log(answer);

module.exports = isPalindrome;
