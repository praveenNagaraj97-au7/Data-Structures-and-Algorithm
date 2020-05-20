// Used for Hashing

function hash(key, arrayLen) {
  let total = 0;
  // key.length is not time efficient
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  console.log(total);
}

// We get same value for pink and orange
// We got collusion

// hash("pink", 10);
// hash("orange", 10);

function hash2(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  console.log(total);
}

// Here also we have Collusion

// hash2("pink", 13);
// hash2("cyan", 13);

// Handling Collusion
// Separate Chaining
// Linear Probing
