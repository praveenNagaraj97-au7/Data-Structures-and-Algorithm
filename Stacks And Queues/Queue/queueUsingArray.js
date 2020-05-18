// FIFO

class Queue {
  constructor() {
    this.array = [];
  }
  push(val) {
    this.array.unshift(val);
    return this.array;
  }
  pop(val) {
    this.array.pop();
    return this.array;
  }
}

const q = new Queue();

console.log(q.push(1));
console.log(q.push(2));
console.log(q.push(3));
console.log(q.push(4));
console.log("--------POP---------");
console.log(q.array);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
