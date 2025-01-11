// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

// Test Cases:

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]

/*
input is array of integers
output is an array of ints. OR null
if there is an output array, it should only have two elements that are integers. these integers should sum to 10

integers can be positive or negative
implicit rules: each number number is an int, there are no floats or decimal.


iterateing through the inputarray, matching all the pairs of numbers,

first for loop will manage the first element idx, second for loop manages the second element idx

within the second for loop, check to see of the two elements sum up to 10,
if they do, return the two elements in an array

return null if we don't return the two elemnts


*/
function findPair(arr) {
  for (let firstIdx = 0; firstIdx < arr.length - 1; firstIdx++) {
    for (let secondIdx = firstIdx + 1; secondIdx < arr.length; secondIdx++) {

      let sumOfElements = arr[firstIdx] + arr[secondIdx]
      if (sumOfElements === 10) {
        return [ arr[firstIdx], arr[secondIdx]]
      }
    }
  }
  return null
}
