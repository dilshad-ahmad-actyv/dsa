function sort(arr) {
  let l = 0;
  let n = arr.length;
  const result = mergeSort(arr, l, n);
  console.log(result);

  function mergeSort(arr, l, h) {
    if (arr.length === 1) return arr;
    if (l < h) {
      let mid = Math.floor((l + h) / 2);

      let left = arr.slice(l, mid);
      let right = arr.slice(mid, h);

      let n1 = left.length;
      let n2 = right.length;

      let elem1 = mergeSort(left, 0, n1);
      let elem2 = mergeSort(right, 0, n2);

      return merge(elem1, elem2);
    }
  }

  function merge(left, right) {
    let i = 0;
    let j = 0;
    let n1 = left.length;
    let n2 = right.length;
    let ans = [];
    let k = 0;
    while (i < n1 && j < n2) {
      if (left[i] > right[j]) {
        ans[k++] = right[j++];
      } else {
        ans[k++] = left[i++];
      }
    }

    while (i < n1) ans[k++] = left[i++];
    while (j < n2) ans[k++] = right[j++];
    return ans;
  }
}

let arr = [1, 3, 5, 0, -1, -23, 0, 6];
const result = sort(arr);
console.log(result);
