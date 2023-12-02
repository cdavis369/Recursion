/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 1) 
    return nums.pop();
  
  return nums.pop() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length == 1)
    return words[0].length;
  if (words[0].length < words[1].length || words[0].length == words[1].length)
    return longest(words.slice(1));
  if (words[0].length > words[1].length)
    return longest(words.slice(0,1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length == 1 || str.length == 2)
    return str[0];
  return str[0] += everyOther(str.substring(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  const l = str.length - 1;
  if (str.length == 1 || str[0] == str[l] && str.length == 2)
    return true;
  if (str[0] != str[l])
    return false;
  if (str[0] == str[l])
    return isPalindrome(str.substring(1,l));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (!arr.includes(val))
    return -1;
  let i = 0;
  if (arr[i] == val)
    return i;
  return i + 1 + findIndex(arr.slice(1), val);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 1)
    return str[0]
  const l = str.length - 1;
  return str[l] += revString(str.substring(0,l))
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  const strings = [];
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val == 'string') {
      strings.push(val);
    }
    else if (typeof val == 'object') {
      const nested = gatherStrings(val);
      for (const str of nested) {
        strings.push(str);
      }
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
