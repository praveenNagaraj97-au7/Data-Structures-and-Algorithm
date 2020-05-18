// Last In First Out

class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  push(val) {
    if (this.length === 0) {
      this.array[this.length] = val;
    } else {
      this.array[this.length] = val;
    }
    this.length++;
    return this.array;
  }
  pop() {
    let removed = this.array[this.array.length - 1];
    this.array.length = Math.max(0, this.array.length - 1);
    return removed;
  }
  show() {
    console.log(this.array);
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.show();
s.pop();
s.show();
