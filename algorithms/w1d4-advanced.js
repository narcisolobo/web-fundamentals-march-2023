/*
  Rotate Array
  Implement rotateArr(arr, offset) that accepts
  an array arr and an integer offset . Shift
  values of arr to the right by offset amount.
  ‘Wrap-around’ any values that shift off the
  end of the array to the other side, so that
  no data is lost.

  Example: rotateArr([1, 2, 3], 1), should return
  [3, 1, 2].
  
  Operate in-place (do not create a new array).

  Bonus: allow a negative offset (shift left, not
  right).
*/

function rotateArr(arr, offset) {
  offset = offset % arr.length;
  for (let i = 0; i < offset; i++) {
    const temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 8));