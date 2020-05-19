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
  bfs() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
const b = new BST();

b.insert(10);
b.insert(6);
b.insert(15);
b.insert(3);
b.insert(20);
b.insert(8);

/*
        10
      6    15
    3   8     20
      
*/

console.log(b.bfs());
