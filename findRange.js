// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

/*
input: an array of
// integers sorted in ascending order

output: an array containing the starting and ending
// positions of the number 3 within the input array.
If the number 3
// is not found, return [-1, -1].

edge cases:
what if 3 is the last/first element array?

find a 3 with binary search template

  if there is no 3 to be found, return [-1, -1]

then find element which is to the left of a 3 that is not a 3
do the same, but for the last 3




*/


function findRange(array) {
  let left = 0
  let right = array.length - 1
  let firstThreeIdx = -1;
  let lastThreeIdx = -1;
  let target = 3;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target ) {
      firstThreeIdx = mid
      left = mid + 1
    } else if (array[mid] < 3) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }


  left = 0
  right = array.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target) {
      lastThreeIdx = mid
      right = mid - 1
    } else if (array[mid] < 3) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return [firstThreeIdx, lastThreeIdx]
}

console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5]))
console.log(findRange([1, 2, 5, 5, 6, 9, 10]))
// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]
