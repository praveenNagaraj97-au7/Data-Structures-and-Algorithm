const List = require("./linked_List");

class Stack {
  constructor() {
    this.array = new List();
    this.length = 0;
  }
  push(val) {
    let newNode = this.array.push(val);
    this.length++;
    return this.array.tail.val;
  }
  pop() {
    let removed = this.array.pop();
    this.length--;
    return removed.val;
  }
}

const s = new Stack();
console.log(s.push(1));
console.log(s.push(2));
console.log(s.push(3));
console.log("----------POP----------");
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
