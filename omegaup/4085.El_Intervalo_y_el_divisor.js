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
  const [a, b] = lines[1].split(' ').map(Number)

  let x = 0
  for (let i = a; i <= b; i++) {
    if (i % n == 0) ++x
  }
  console.log(x)
})
