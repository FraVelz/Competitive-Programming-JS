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
  const [n, ...arr] = lines.map(Number)

  let pr = arr.reduce((a, b) => a + b, 0) / n

  let res = 0
  for (let e of arr) {
    if (e > pr) res += e - pr
  }
  console.log(res)
});
