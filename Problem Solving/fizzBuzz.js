function fizzBuzz(range) {
  if (typeof range != "number") return "Enter Range in Number";
  let i = 1;
  while (i < range + 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
    i++;
  }
}

fizzBuzz(100);
