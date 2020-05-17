/*
Write a function called same, which accepts two array.
The function should return true if every value in the
array has it's corresponding value squared in the second array.
The frequency of values must be same
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i] ** 2)) {
      arr2.splice(arr2[i], 1);
    }
  }
  if (arr2.length === 1) return true;
  return false;
}
// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 4], [4, 1, 9]));
