// Works on Sorted array only
function binerySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let mid = parseInt((start + end) / 2, 10);
  while (arr[mid] !== el && start <= end) {
    if (el < arr[mid]) end = mid - 1;
    else start = mid + 1;

    mid = parseInt((start + end) / 2, 10);
  }
  if (arr[mid] === el) return mid;
  return -1;
}
console.log(binerySearch([1, 3, 5, 7, 9], 9));
