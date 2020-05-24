function maxChar(str) {
  const resObj = {};
  for (let each of str) {
    if (!resObj[each]) {
      resObj[each] = 1;
    } else {
      resObj[each]++;
    }
  }
  let res = "";
  let max = 0;
  for (let each in resObj) {
    if (resObj[each] > max) {
      max = resObj[each];
      res = each;
    }
  }
  console.log(res);
}

maxChar("abbcccccc");
