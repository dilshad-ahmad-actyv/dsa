function runProgram(input) {
    input = input.trim().split('\n');
    let test = +input[0];
    let line = 1;

    console.log(input);
}
  
  if (process.env.USER === 'dilshadahmad') {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
