class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  pop() {
    if (!this.tail) return undefined;
    let current = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.head.prev = null;
    current.next = null;
    current.prev = null;
    this.length--;
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.push(val);
    } else {
      let currentNext = this.head;
      this.head = newNode;
      this.head.next = currentNext;
      this.length++;
      return newNode;
    }
  }
  getValByIndex(index) {
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return "Index Out of Range";
    if (index === 0) return this.head;
    let current = this.head;
    let count = 0;
    while (current.next) {
      current = current.next;
      count++;
      if (count === index) {
        return current;
      }
    }
  }
  setValByIndex(index, val) {
    let requestedIndex = this.getValByIndex(index);
    if (!requestedIndex) return undefined;
    requestedIndex.val = val;
    return requestedIndex;
  }
}

const d = new DoublyLinkedList();

d.push(1);
d.push(2);
d.push(3);
d.push(4);
d.pop();
d.push(4);
d.shift();
d.unshift(5);
console.log(d.getValByIndex(0));
console.log(d.setValByIndex(0, 1));
