/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
   if (str1.length !== str2.length) return false;

 
 
  for (let i = 0; i < str1.length; i++) {
    let count = str1[i];
     let found = false;
    
      for(let i=0;i<str2.length;i++)
        {
          if(str2[i]==count)
          {
            
            found=true;
            break;
          }
        }
   if (!found) {
        return false; 
      }
    }
    return true; 
  
}

var letsCheck = isAnagram("spar","rasp")
console.log(letsCheck);


//module.exports = isAnagram;
