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
  const [a, b] = lines.map(Number)

  for (let i = -a; i >= -b; --i) {
    console.log(i)
  }
});
