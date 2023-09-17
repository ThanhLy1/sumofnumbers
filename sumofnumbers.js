/**
 * Calculates the sum of numbers in an array using a for loop.
 * @param {Array} numbers - An array of numbers to be summed.
 * @returns {number} - The sum of the numbers in the array.
 */
function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/**
 * Calculates the sum of numbers in an array using a while loop.
 * @param {Array} numbers - An array of numbers to be summed.
 * @returns {number} - The sum of the numbers in the array.
 */
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

/**
 * Calculates the sum of numbers in an array using recursion.
 * @param {Array} numbers - An array of numbers to be summed.
 * @param {number} index - The current index being processed (default is 0).
 * @returns {number} - The sum of the numbers in the array.
 */
function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0; // Base case: When the index reaches the end of the array.
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}

/**
 * Calculates the sum of numbers in an array using Underscore.js.
 * @param {Array} numbers - An array of numbers to be summed.
 * @returns {number} - The sum of the numbers in the array.
 */
function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers)); // Output: 15
console.log(sumWhile(numbers)); // Output: 15
console.log(sumRecursion(numbers)); // Output: 15
console.log(sumTheSimpleWay(numbers)); // Output: 15
