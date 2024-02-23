let nums = [0, 0, 1, 0, 1, 1, 1, 1, 0, 0];
let i = 0;
let j = nums.length - 1;

while (i < j) {
  if (nums[i] === 1 && nums[i] !== nums[j]) {
    swap(nums, i, j);
    i++;
    j--;
  } else if (nums[i] === 1 && nums[j] === 1) {
    j--;
  } else if (nums[i] === 0 && nums[j] === 0) {
    i++;
  } else {
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

console.log(nums);