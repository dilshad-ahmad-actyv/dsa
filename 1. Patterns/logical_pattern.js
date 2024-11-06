const pattern = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];

const n = pattern.length;
for (let i = 1; i < n; i++) {
  const currentVal = pattern[i] - 3;
  pattern[i] = `${currentVal} + ${3}`;
}

console.log(pattern);
