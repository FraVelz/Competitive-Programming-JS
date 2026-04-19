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

  let res = []
  let i = 1, acc = 0

  while (i * 10 <= n) {
    acc += i
    res.push(acc)
    i++
  }

  console.log(res.join(' '))
});
