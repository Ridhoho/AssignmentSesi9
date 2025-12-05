function sumArray(arr, int) {
  let pairs = [];
  const seen = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = int - num;
    if (seen.includes(complement)) {
      pairs.push([complement, num]);
    }

    seen.push(num);
  }
  return pairs;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []
