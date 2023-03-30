/*
The Fibonacci Sequence

In mathematics, the Fibonacci sequence is a sequence in which
each number is the sum of the two preceding ones. Individual
numbers in the Fibonacci sequence are known as Fibonacci numbers.

The sequence commonly starts from 0 and 1. The first few values
in the sequence are:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.

Create a function that accepts an integer representing a position
in the sequence, and return the value at that position.

Examples:
fibonacci(2) => 1
fibonacci(5) => 5
fibonacci(8) => 21
fibonacci(11) => 89
*/

/**
 * This function takes in an integer representing a position
 * in the Fibonacci sequence and returns the value at that
 * position.
 * 
 * @param {Number} pos - A position in the Fibonacci sequence.
 * @returns {Number} The Fibonacci number at that position.
 */
function fibonacci(pos) {
  const fibArr = [0, 1];
  for (let i = 2; i <= pos; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1])
  }
  return fibArr[pos];
}

/**
 * A recursive function that takes in an integer representing
 * a position in the Fibonacci sequence and returns the value
 * at that position.
 * 
 * @param {Number} pos - A position in the Fibonacci sequence.
 * @returns {Number} The Fibonacci number at that position.
 */
function fibRecursive(pos) {
  if (pos < 2) {
    return pos;
  }
  return fibRecursive(pos - 2) + fibRecursive(pos - 1);
}
