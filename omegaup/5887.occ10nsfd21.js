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
  let c = parseInt(lines[0]);
  let n = 1

  while (c != 1) {
    if (c & 1) c = (c * 3) + 1
    else c /= 2
    ++n
  }

  console.log(n)
});
