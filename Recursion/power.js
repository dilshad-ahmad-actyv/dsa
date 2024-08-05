// function powerLinear(x, n) {
//   if (n === 0) return 1;
//   let fnm1 = powerLinear(x, n - 1);
//   let fn = x * fnm1;
//   return fn;
// }

// const result = powerLinear(2, 4);
// console.log(result);

function powerLogarithmic(x, n) {
  if (n === 0) return 1;
  let power = Math.floor(n / 2);

  let xnb2 = powerLogarithmic(x, power);
  let product = x ** power;
  let result = product * xnb2;
  if (n % 2 === 1) {
    result = result * product;
  }
  return result;
}

console.log(powerLogarithmic(2, 6));
