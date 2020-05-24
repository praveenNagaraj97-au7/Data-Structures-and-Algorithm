function reverseString(str) {
  let n = str.length;
  let res = "";
  while (n > 0) {
    res += str[n - 1];
    n--;
  }
  console.log(res);
}

//reverseString("deew")

function reverseStr(str) {
  console.log(str.split("").reverse().join(""));
}

//reverseStr("deew")

function revStr(str) {
  let res = "";
  for (let each of str) {
    res = each + res;
  }
  console.log(res);
}

//revStr("deew")
