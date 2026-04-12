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
  const [n, m] = lines[0].split(' ').map(Number)

  let a = 0, pos = 0

  for (let i = 1; i <= n; i++) {
    a += lines[i].split(' ').map(Number).reduce((a, b) => a + b, 0)

    if (a >= m) { pos = i - 1; break }
  }

  console.log(pos)
});
