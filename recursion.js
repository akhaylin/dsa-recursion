/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  let nextLength = longest(words.slice(1))

  return Math.max(words[0].length, nextLength )
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  debugger;
  if (str.length === 0) return '';
  debugger;
  return str[0] + everyOther(str.slice(2))
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if(arr.length === 0) return false;

  return arr[0] === val || find(arr.slice(1), val)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;

  return str[0] === str[str.length -1] && isPalindrome(str.slice(1, -1))
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, copy="", i=str.length-1) {
  if (i < 0) return copy;

  copy += str[i];
  return revString(str, copy, i-1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[]) {

  for (let key in obj) {
    debugger;
    if (typeof obj[key] === "string") {
      out.push(obj[key]);
    }
    else if (typeof obj[key] === "object") {
      gatherStrings(obj[key],out);
    }
  }

  return out;
}

// FURTHER STUDY


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);

  if(arr[mid] === val){
    return mid;
  }else if (arr[mid] < val) {
    return binarySearchIndex(arr, val, left + 1, right)
  }else {
    return binarySearchIndex(arr, val, left, right - 1 )
  }



}

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {

  if (left > right) {
    return false;
  }

  let mid = Math.floor((left + right) / 2);

  if(arr[mid] === val){
    return true;
  }else if (arr[mid] < val) {
    return binarySearch(arr, val, left + 1, right)
  }else {
    return binarySearch(arr, val, left, right - 1 )
  }

}


// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
