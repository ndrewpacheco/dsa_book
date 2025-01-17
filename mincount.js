// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.

/*
input is array
out potus is int

find the index where there is either a zero, OR  wehre the numbers go from negative to positive

count how many elemnts there are on the left, and then the right

return the smaller number, or if they are equal return that number


Search for 0
initizle zeroIdx to undefined
init leftSide/ right side to 0

binary search where target is 0

once idx is found,

left side length will be zeroIdx,
right side length will be arr.length - (zeroIDx + 1)

return the smaller lefnth, or if they are equal return that length

if zeroIdx is undefined, search for where numbers from negative to positive


*/


function minimumCount(array) {
  let zeroIdx;
  let leftSide = 0;
  let rightSide = 0;

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === 0) {
      zeroIdx = mid;
      break;
    } else if (array[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }


if (zeroIdx !== undefined) {

  leftSide = zeroIdx;
  rightSide = array.length - (zeroIdx + 1);

  return leftSide <= rightSide ? leftSide : rightSide;
}





  // Most often, if the target is not found, additional handling
  // or returning a specific value is needed. In many cases it will
  // be the index that `left` variable holds, which would indicate
  // where the target *would* fit into the array.
}
