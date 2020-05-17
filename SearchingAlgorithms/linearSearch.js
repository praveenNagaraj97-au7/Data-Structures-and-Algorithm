function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}

console.log(linearSearch([1, 6, 7, 4, 8, 9], 4));
//O(n)
