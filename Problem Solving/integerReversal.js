function intReversal(int) {
  if (typeof int !== "number") return "Enter An Integer";
  let integer = String(int).split("");
  integer[0] == "-"
    ? console.log(
        Number(integer[0] + integer.slice(1, integer.length).reverse().join(""))
      )
    : console.log(Number(integer.reverse().join("")));
}

intReversal(981);
intReversal(500);
intReversal(-51);
intReversal(-90);
