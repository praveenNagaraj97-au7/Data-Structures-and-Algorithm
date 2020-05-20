class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return "Not Found";
  }
  values() {
    let dataValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!dataValues.includes(this.keyMap[i][j][1]))
            dataValues.push(this.keyMap[i][j][1]);
        }
      }
    }
    return dataValues;
  }
  keys() {
    let dataKey = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!dataKey.includes(this.keyMap[i][j][0]))
            dataKey.push(this.keyMap[i][j][0]);
        }
      }
    }
    return dataKey;
  }
}

const h = new HashTable();

h.set("pink", "#f343q5");
h.set("cyan", "#fe34fe");
h.set("cyan", "#fe34fe");
h.set("clay", "#fe34fe");
h.set("cream", "#fe34fe");
// console.log(h.get("pink"));
// console.log(h.get("cyan"));
// console.log(h.get("orange"));
console.log(h.values());
console.log(h.keys());
