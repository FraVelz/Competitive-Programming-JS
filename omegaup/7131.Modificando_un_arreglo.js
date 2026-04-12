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

  let res = Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    ++res[Number(lines[i + 1])]
  }

  console.log(res.join(' '))
});
