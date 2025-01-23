// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// // Example:
// let nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// // Output: [2, 6]
// console.log(findRange(nums))
// // Example:

// nums = [1, 2, 5, 5, 6, 9, 10]
// // Output: [-1, -1]
// console.log(findRange(nums))


function findLeftMost(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === 3 && array[mid - 1] < 3) {
      return mid
    } else if (array[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1

}


function findRightMost(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === 3 && array[mid + 1] > 3 || array[mid + 1] === undefined) {
      return mid

    } else if (array[mid] > 3) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1
}

function findRange(array) {

  return [findLeftMost(array), findRightMost(array)]

}

let nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]
console.log(findRange(nums))
// Example:
nums = [1, 2, 3, 3, 3, 3, 3]
console.log(findRange(nums))
nums = [1, 2, 5, 5, 6, 9, 10]
// // Output: [-1, -1]
console.log(findRange(nums))


// Most often, if the target is not found, additional handling
// or returning a specific value is needed. In many cases it will
// be the index that `left` variable holds, which would indicate
// where the target *would* fit into the array.
