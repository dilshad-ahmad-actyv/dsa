let nums = [6, 5, 4, 3, 2, 1];
let l = 0;
let h = nums.length - 1;
const result = quickSort(nums, l, h);
console.log(result);

function quickSort(nums, l, h) {
  if (l < h) {
    let j = partition(nums, l, h);
    quickSort(nums, l, j);
    quickSort(nums, j + 1, h);
  }
  return nums;
}

function partition(arr, l, h) {
  let pivot = arr[l];
  let i = l;
  let j = h;

  while (i < j) {
    while (arr[i] <= pivot) i++;
    while (arr[j] > pivot) j--;
    if (i < j) swap(arr, i, j);
  }
  swap(arr, l, j);
  return j;
}

function swap(arr, i, j) {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}
