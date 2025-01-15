// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");

console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true


/* input is a string
output is a string, with constonants being swapped in positions, but vowels staying put.

if the input is an empty string, return an emtpy string

have startpoint var initialize at 0,
endpoint init at str.length - 1

convert the string into an array of characters

while start < end

if str[start] is a constonant AND str[end] is a constant
  swap the two
  increment start
  decrement end

else
increment start IF it points to a vowel
decrement end IF it points to a vowel



isVowel should hceck it char is a vowel by lowercaseing



*/

function reverseConsonants(str) {
  if (str.length === 0) return str

  let start = 0;
  let end = str.length - 1;
  const chars = str.split('')

  while (start < end) {
    if (!isVowel(chars[start]) && !isVowel(chars[end])) {
      [chars[start], chars[end]] = [chars[end], chars[start]]
      start++
      end--
    } else {
      if (isVowel(chars[start])) start++
      if (isVowel(chars[end])) end--
    }
  }

  return chars.join("")
  }


function isVowel(char) {
  return ["a", 'e', 'i','o', 'u'].includes(char.toLowerCase())
}