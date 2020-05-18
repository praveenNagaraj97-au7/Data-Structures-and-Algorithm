class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else {
        return undefined;
      }
    }
  }
  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    if (val === current.val) {
      return "FOUND";
    }
    while (true) {
      if (!current) return "NOT FOUND";
      if (val === current.val) return "FOUND";
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  find_Max() {
    if (!this.root) return undefined;
    let current = this.root;
    if (!current.right) return current.val;
    while (current.right) {
      current = current.right;
      if (!current.right) return current.val;
    }
  }
  find_Min() {
    if (!this.root) return undefined;
    let current = this.root;
    if (!current.left) return current.left;
    while (current.left) {
      current = current.left;
      if (!current.left) return current.val;
    }
  }
}
const b = new BST();

b.insert(10);
b.insert(8);
b.insert(7);
b.insert(15);
b.insert(15);
console.log(b.find(150));
console.log(b.find(10));
console.log(b.find(8));
console.log(b.find(15));
console.log(b.find(7));
b.insert(22);
b.insert(14);

console.log(b.find_Max());
console.log(b.find_Min());
////////////////////////////////////////
// b.root = new Node(10);
// b.root.right = new Node(15);
// b.root.left = new Node(8);

// b.root.right.right = new Node(20);
// b.root.right.left = new Node(12);

// b.root.left.right = new Node(11);
// b.root.left.left = new Node(5);

// console.log(b.root);
