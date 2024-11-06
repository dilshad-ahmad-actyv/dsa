let n = 5;

for (let i = 1; i <= n; i++) {
  let horizontalSum = "";
  for (let k = 0; k < n - i; k++) {
    horizontalSum += " ";
  }

  for (let j = 1; j <= i; j++) {
    horizontalSum += " " + i;
  }
  console.log(horizontalSum);
}
