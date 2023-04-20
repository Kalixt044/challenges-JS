export function findLargestPalindrome(words) {
let largestPalindrome = null;
  let maxLength = 0;

  for (let word of words) {
    if (isPalindrome(word) && word.length > maxLength) {
      largestPalindrome = word;
      maxLength = word.length;
    }
  }

  return largestPalindrome;
}

function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
