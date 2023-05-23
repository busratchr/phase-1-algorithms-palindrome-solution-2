function isPalindrome(word) {
  // Write your algorithm here
  let length = word.length;
  for (let i = 0; i<length / 2; i++){
    if(word[i] !== word[length - 1 - i]){
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  for i = 0 to length/2;
  if word[i] is not equal to word[length -1 - i];
  return false // characters don't match, not a palindrome

  return true // all characters match, it is a palindrome
*/

/*
  Add written explanation of your solution here
  The 'isPalindrome' function checks whether a given string is a palindrome.
  It iterates over the characters of the string using 'for' loop, comparing characters
  from the beginning and end of the string.
  if any characters match, the function returns 'false', which means the
  word is not a palindrome.
  if all characters match, the function returns 'true', indicating that
  the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
