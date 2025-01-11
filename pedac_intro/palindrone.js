// Given a string, write a function, `palindromeSubstrings`, that returns
// all the substrings from the given string that are palindromes and have
// a minimum length of two.

// Test cases:

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]

console.log(palindromeSubstrings("abcDDcbA"));
// should return: ["bcDDcb", "cDDc", "DD"]

console.log(palindromeSubstrings("palindrome"));
// should log: []

console.log(palindromeSubstrings(""));
// should log: []

/*

input is String
output is Array, with all matching palindrones from input as elements

find all the  substrings from a given String
filter the substrings to check if they are palindrones

examples:
  palindrones are minimum 2 char in length or more
  "  " are case senstive
  empty string put should return an empty array


  how to get substrings of string:
  iterate through chars of the string, starting at the first index, and matching the end index until it reaches length

  slice(indexStart, indexEnd)

  end index increment each iteration untill reaches the string length. Within each iteration, push the substring that is s
  (0,1)

  once that is complete, start a new iteration on a outer loop, incrementing the start index, untill that index reaches str.length -2


*/

function substrings(str) {
  let result = []
  for (let startIdx = 0; startIdx < str.length; startIdx++) {
    for (let  endIdx = startIdx + 2; endIdx < str.length + 1; endIdx++) {
      result.push(str.slice(startIdx, endIdx))
    }
  }
  return result
}

function palindromeSubstrings(str) {

  return substrings(str).filter(word => {

    return word === word.split('').reverse().join('')
  })
}
