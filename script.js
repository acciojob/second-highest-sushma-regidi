//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity; // less than 2 elements

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? -Infinity : secondMax;
}

// Examples
console.log(secondHighest([5, 1, 2, 3, 4]));    // 4
console.log(secondHighest([-1, -2, -3, -4]));   // -2
console.log(secondHighest([]));                 // -Infinity
console.log(secondHighest([1]));                // -Infinity
console.log(secondHighest([1, 1, 1, 1]));       // -Infinity
