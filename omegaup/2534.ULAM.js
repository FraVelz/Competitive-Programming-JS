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
  let n = parseInt(lines[0], 10);

  let res = n.toString() + ' '

  while (n !== 1) {
    if (n & 1) n = n * 3 + 1
    else n /= 2
    res += n.toString() + (n !== 1 ? ' ' : '')
  }

  console.log(res)
});
