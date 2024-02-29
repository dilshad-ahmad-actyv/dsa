const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
// Brute force solution

let ans = [];

for (let i = 0; i <= arr.length - k; i++) {
  let bool = false;
  for (let j = i; j < i + k; j++) {
    if (arr[j] < 0) {
      ans.push(arr[j]);
      bool = false;
      break;
    } else {
      bool = true;
    }
  }
  if (bool) {
    ans.push(0);
  }
}
console.log(ans);
