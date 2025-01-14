// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.



// All test cases should log true

/*
Input is array of ints,
output is an int, it is the majority element
majority element appears as atleast half of the elements

array lengths can be even or odd, if array is odd lengthed, the majority should happen atleast halfed up its rounded number
ex if array is length of 5, the major ele should been seen atleast 3 times

edge cases: is every element a number type? any decimals? any negatives?

=> Math.ceil(arr.length / 2)
the majority element should been seen atleast this amount of times

create a map
iterate through the input array
if map has a key that matches the elemnto f input array, increase its value by 1
else set a new key in the map with the input element, and set its value to 0

once completed, find the highest value in the map, and return its key as a number
delare a variable and point it a variable with the first  key and index as elements
['key', 'value' ]
inital = [arr[0], majMap.get(arr[0])]
=> iterate through map with for each
if value is larger than value in inital,
set inital to the current key/value


return value from inital

*/
 function findMajority(nums) {
  const counts = new Map()
  const majCount = Math.ceil(nums.length / 2)

  for (let num of nums) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1)
    } else {
      counts.set(num, 1)
    }

    if (counts.get(num) >= majCount) {
      return num
    }

  }
 }

 // Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]));
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]));
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]));
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]));
console.log(findMajority([5, 5, 5]));