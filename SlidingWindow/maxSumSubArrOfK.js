let arr = [2, 5, 1, 8, 2, 9, 1];
let k = 3;
function maxSumSubArrOfSizeK(arr) {
  let i = 0;
  let j = 0;
  let n = arr.length;
  let sum = 0;
  let max = null;

  while (j < n) {
    sum += arr[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (max < sum) {
        max = sum;
      }
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return max;
}

const result = maxSumSubArrOfSizeK(arr, k);
console.log(result);
