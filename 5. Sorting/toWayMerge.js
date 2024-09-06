// let arr1 = [1, 2, 4, 6];
// let arr2 = [3, 4, 6, 8, 12];
// let i = 0;
// let j = 0;
// let n1 = arr1.length;
// let n2 = arr2.length;
// let ans = [];
// let k = 0;

// while(i<n1 && j<n2){
//     if(arr1[i] > arr2[j]){
//         ans[k++] = arr2[j++];
//     }else{
//         ans[k++] = arr1[i++];
//     }
// }

// while(i<n1) ans[k++] = arr1[i++];
// while(j<n2) ans[k++] = arr2[j++];

// console.log(ans);

var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let answer = nums1;
  let k = 0;
  nums1 = nums1.slice(0, nums1.length);

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      answer[k++] = nums1[i++];
    } else {
      answer[k++] = nums2[j++];
    }
  }

  while (i < m) {
    answer[k++] = nums1[i++];
  }

  while (j < n) {
    answer[k++] = nums2[j++];
  }

  return answer;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

const result = merge(nums1, m, nums2, n);
console.log(result);
