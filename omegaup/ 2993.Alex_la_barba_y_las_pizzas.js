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
  let [n, m] = lines[0].split(' ').map(Number)
  let x = 0

  const nums = lines[1].split(' ').map(Number)

  for (let i = 0; i < n; i++) x += nums[i]

  console.log(x * m)
});
