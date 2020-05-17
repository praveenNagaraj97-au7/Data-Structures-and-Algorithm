/*
Given two Strings ,write a function to determine if the
second string is an anagram of the first. An anagram is 
a word, phrase,or name formed by rearranging the
letters of another, such as cinema, formed from iceman.
*/

function validAnagram(str1, str2) {
  if (str1 === str2) return true;

  str1 = str1.split("");
  str2 = str2.split("");

  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) str1.splice(str1[i], 1);
  }
  if (str1.length === 0) return true;
  return false;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aa", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("cat", "rat"));
console.log(validAnagram("awesom", "awesome"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("timetexttwist", "timetexttwist"));
