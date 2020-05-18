class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /*
  This Takes a val to be added to list
  Create a new Node Using the value passed by using the Node class.
  check for head value if it's empty add the new val reference to head 
  and the same to tail.
  if head is not empty.
  change the tail to next and assign newNode to it
  increment length every time a val is added
  return the list at end.
  */
  push(val) {
    let newNode = new Node(val); // A Node containd val and next ref
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /*
  check for empty list 
  set the current to present head and new tail to same head
  check for current.next 
  set new tail to current(this.head) - this is always one node behind current
  set current to the current next
  at end when there are no next
  assign new tail as this.tail
  and newTail next as null
  decrement length
  and return the current (removed val)
  */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  /*
  shift means removing the first element from list
  check if the list is empty if empty return undefined
  store the head to new variable
  and make the head next as new head
  decrement length
  */
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return this;
  }
  /*
  add element at starting of the list
  if the list is empty call push method which sets head and tail as newNode
  store the new val as new Node variable
  and make current head as new Node next
  increment length
  */
  unshift(value) {
    if (!this.head) {
      this.push(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /*
  if index < 0 or index > this,length return null;
  if index is 0 return head.val
  create variable called counter and assign 0
  set this.head to new variable current
  start looping for current.next 
  assign current = current.next 
  increment counter
  while counter value is equal to index val break
  return the current.val
  */
  getValByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    let count = 0;
    let current = this.head;
    while (current.next) {
      current = current.next;
      count++;
      if (count === index) break;
    }
    return current;
  }
  /*
  change value by index
  check for node existance using getValByIndex
  if exist
  change it's value with new value
  return true if changed or false if not changed
  */
  setValByIndex(val, index) {
    let requestedindexCurrent = this.getValByIndex(index);
    if (requestedindexCurrent) {
      requestedindexCurrent.val = val;
      return true;
    }
    return false;
  }
  insertNewAt(val, index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);

    let prev = this.getValByIndex(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  removeByindex(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop;
    let prevNode = this.getValByIndex(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return true;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current.next) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
  reverse() {
    // return this.print().reverse();
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list.push(0));
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));

console.log(list.pop());
console.log(list.shift());
console.log(list.push(4));
console.log(list.unshift(0));

console.log(list.unshift(5));
console.log(list.getValByIndex(0));
console.log(list.setValByIndex(4, 1));
console.log(list.getValByIndex(1));
console.log(list.insertNewAt(6, 4));
console.log(list.getValByIndex(4));
console.log(list.removeByindex(4));
console.log(list.getValByIndex(4));

console.log("--------------------------");

console.log(list.reverse());
