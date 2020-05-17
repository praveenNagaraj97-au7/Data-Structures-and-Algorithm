/*
Write a function called maxSubarraySum which accepts
ab array of integers and a number called n. The function
should calculate the maximum sum of n consecutive 
elements in the array
*/

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 5));
