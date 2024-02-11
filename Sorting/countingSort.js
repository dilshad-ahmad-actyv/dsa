// let nums = [1, 2, 0, 0, 2, 0, 1];

// let numCounts = {};
// let i = 0;
// let n = nums.length;
// let ans = [];
// while (i < n) {
//   if (numCounts[nums[i]] === undefined) {
//     numCounts[nums[i]] = 1;
//   } else {
//     numCounts[nums[i]]++;
//   }
//   i++;
// }

// for (let k in numCounts) {
//   if (k === "0") {
//     pushValue(numCounts[k], 0);
//   } else if (k === "1") {
//     pushValue(numCounts[k], 1);
//   } else {
//     pushValue(numCounts[k], 2);
//   }
// }

// console.log(ans);

// function pushValue(count, num) {
//   while (count > 0) {
//     ans.push(num);
//     count--;
//   }
// }

function countingSort(nums) {
  console.log({ nums });
  let count = Array.from({ length: 3 }, () => 0); // Count array to store frequency of elements
  console.log({ count });
  // Count the frequency of each element
  for (let num of nums) {
    count[num]++;
  }

  // Reconstruct the sorted array using counts
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      nums[index++] = i;
      count[i]--;
    }
  }

  return nums;
}

let nums = [1, 2, 0, 0, 0, 2, 1, 1];
let sortedArray = countingSort(nums);

console.log(sortedArray); // Output: [0, 0, 1, 1, 2, 2]
