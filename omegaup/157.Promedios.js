'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const arr = lines[0].split(' ').map(Number)
  const n = arr.reduce((a, b) => a + b, 0)
  console.log(Math.floor(n / arr.length))
});
