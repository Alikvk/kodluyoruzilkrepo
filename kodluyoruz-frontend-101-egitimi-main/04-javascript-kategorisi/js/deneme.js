"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function conditionalStatement(data) {
  if (data % 2 == 1) {
    print("Weird");
  } else if (data % 2 == 0 && data >= 2 && data <= 5) {
    print("Not Weird");
  } else if (data % 2 == 0 && data >= 6 && data <= 20) {
    print("Weird");
  } else if (data % 2 == 0 && data > 20) {
    print("Not Weird");
  }
}

function main() {
  const N = parseInt(readLine().trim(), 10);
  conditionalStatement(N);
}
