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

  let b, k, t, u, d = 0

  d = n % 20
  u = n / 20
  t = u / 18
  k = t / 20
  b = k / 20

  console.log(
    parseInt(b, 10),
    parseInt(k % 20, 10),
    parseInt(t % 20, 10),
    parseInt(u % 18, 10),
    d
  )
});
