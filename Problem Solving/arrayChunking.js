function chunk(arr, size) {
  const chunked = [];
  for (let each of arr) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([each]);
    } else {
      last.push(each);
    }
  }
  console.log(chunked);
}

// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

function chunk2(arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  console.log(chunked);
}

chunk2([1, 2, 3, 4, 5, 6, 7, 8], 2);
