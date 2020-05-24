function captalize(str) {
  let res = [];
  for (let each of str.split(" ")) {
    res.push(each.replace(each.charAt(0), each.charAt(0).toUpperCase()));
  }
  console.log(res.join(" "));
}

captalize("city of crime");
captalize("Hello");
