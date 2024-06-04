const n = 5;

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j < i; j++) {
    pattern += "   ";
  }
  for (let j = 0; j < n - i; j++) {
    pattern += " * ";
  }
  console.log(pattern);
}
