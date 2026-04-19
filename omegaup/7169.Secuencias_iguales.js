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
  const arr1 = lines[1].split(' ').map(Number)
  const arr2 = lines[2].split(' ').map(Number)

  let flag = 1
  for (let i = 0; i < n; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = 0
      break
    }
  }
  console.log(flag)
});
