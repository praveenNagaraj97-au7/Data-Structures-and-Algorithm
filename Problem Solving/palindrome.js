function palindrome(str) {
  return str === str.split("").reverse().join("");
}

// console.log(palindrome("malam"));

function palindrome2(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

console.log(palindrome2("malam"));
