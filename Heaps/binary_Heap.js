// Best for Insertion, and priority queue

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this._bubbleUp();
  }

  /*
  take the index of last element or recently added item
  find its parent by (index - 1) /2
  compare two and swap the values
  compare that it's parent
  */
  _bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  removeMax() {
    const maxVal = this.values[0];
    const lastValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = lastValue;
      this._sinkDown();
    }
    return maxVal;
  }
  _sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const h = new MaxBinaryHeap();

h.insert(41);
h.insert(39);
h.insert(33);
h.insert(18);
h.insert(27);
h.insert(12);
h.insert(55);
console.log(h.values);
console.log(h.removeMax());
console.log(h.removeMax());
console.log(h.removeMax());
console.log(h.removeMax());
console.log(h.removeMax());
console.log(h.removeMax());
console.log(h.removeMax());
console.log(h.values);
