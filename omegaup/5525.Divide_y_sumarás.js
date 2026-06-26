'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const n = parseInt(lines[0], 10);

  let bin = n * 2
  let a = bin

  let ones = 0;

  while (a > 0) {
    a = a & (a - 1);
    ones++;
  }

  console.log(bin - ones)
});
