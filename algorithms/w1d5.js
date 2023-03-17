// Week 1 Day 5 - Work hard to get Arrays
// How to swap variables

var fruit1 = 'apples';
var fruit2 = 'oranges';

fruit2 = fruit1;

console.log(fruit2 + ' and ' + fruit1);
// prediction: apples and apples

var fruit1 = 'apples';
var fruit2 = 'oranges';

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + ' and ' + fruit1);

// While loops
// We have previously worked with for loops, how are while loops different?

// a simple while loop
// like a deconstructed for loop
var i = 1; // sentry starting point
while (i <= 10) {
  // 'as long as' i less than or equal to 10
  console.log(i);
  i++; // increments by one
}

var start = 0;
var end = 12;

while (start < end) {
  console.log('start: ' + start + ', end: ' + end);
  start += 2;
  end -= 2;
}

// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

// Reversing an array
// Write a function reverse(arr) to reverse an array in place, if we were given...

['a', 'b', 'c', 'd', 'e']; // input

['e', 'd', 'c', 'b', 'a']; // output

// Let's do this 'in-place' do not create a new array.

function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));