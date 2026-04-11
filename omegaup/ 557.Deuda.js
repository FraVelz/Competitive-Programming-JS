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
  const d = parseInt(lines[0].split(' ')[0], 10)
  const p = lines.slice(1).map(Number).reduce((a, b) => a + b)

  console.log(d - p)
});
