/*
Given a sorted array of integers, write a function 
called search, that accepts a value and returns the
index where the value passed to the function is 
located. If the value is not found ,return -1.
*/
// Linear
function search(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}

console.log(search([1, 2, 4, 8, 9], 4));

function searchByDivandConq(arr, el) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2, 10);
    if (arr[mid] < el) {
      start = mid + 1;
    } else if (arr[mid] > el) {
      end = mid - 1;
    } else return mid;
  }
  return -1;
}
console.log(searchByDivandConq([1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 15], 5));
