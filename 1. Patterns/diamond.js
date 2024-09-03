let n = 5;
for (let i = 0; i < n; i++) {
  let pattern = "";
  let spaces = "";

  for (let k = Math.ceil(n / 2) - i; k >= 0; k--) {
    spaces += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    pattern += " " + "*";
  }

  pattern = spaces + pattern + spaces;
  console.log(pattern);
}
