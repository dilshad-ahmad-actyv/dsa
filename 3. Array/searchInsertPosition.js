/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
var searchInsert = function (nums, target) {
  let l = 0;
  let h = nums.length - 1;
  let mid;
  while (l <= h) {
    mid = Math.floor((l + h) / 2);
    if (nums[mid] === target) {
      return mid;
    } else {
      if (nums[mid] > target) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  if (nums[mid] > target) {
    return mid;
  } else {
    return mid + 1;
  }
};

const nums = [1, 3, 4, 5];
const target = 2;
searchInsert(nums, target);
