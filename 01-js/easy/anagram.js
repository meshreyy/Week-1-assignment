/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// function isAnagram(str1, str2) {

//   let sstr1 = str1.split('').sort().join('');
//   let sstr2 = str2.split('').sort().join('');

//   if(sstr1==sstr2)
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }

// var answer = isAnagram("acew", "cea");
// console.log(answer);



function sorting(str)
{
  var array = str.split("");
  array = array.sort();
  var sortedString = array.join("");
  return sortedString;
}

function isAnagram(str1,str2)
{
  if(sorting(str1)==sorting(str2))
  {
    return true;
  }
  else
  {
    return false;
  }
}

var answer = isAnagram("aced","deac");
console.log(answer);

module.exports = isAnagram;
