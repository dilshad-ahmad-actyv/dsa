const arr = [1, 3, 4, 6, 7, 10, 20, 23, 34, 40, 42, 45, 50];
const k = 23;

function findIndexOfK(arr, k) {
  let l = 0;
  let n = arr.length;
  let h = n - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (k === arr[mid]) {
      return mid;
    }

    if (k < arr[mid]) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

const result = findIndexOfK(arr, k);
console.log(result);
