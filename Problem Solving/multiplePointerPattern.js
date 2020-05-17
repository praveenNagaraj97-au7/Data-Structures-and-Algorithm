/*
Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is 0, Return an array that includes both
values that sum to zero or undefined if a pair does not exist
*/

function sumZero(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    let sum = arr[startIndex] + arr[endIndex];
    if (sum === 0) return [arr[startIndex], arr[endIndex]];
    else if (sum > 0) endIndex--;
    else startIndex++;
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero[(-2, 0, 1, 3)]);
console.log(sumZero([1, 2, 3]));
