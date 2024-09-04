const matrix = [
  ["B", "E", "A", "M"],
  ["E", "A", "R", "N"],
  ["A", "R", "E", "N"],
  ["M", "N", "N", "N"],
];

function validWordSquare(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] !== matrix[j][i]) return false;
    }
  }
  return true;
}

console.log(validWordSquare(matrix));
