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
  for (let i = 1; i < lines.length; i++) {
    console.log(lines[i].split(' ').map(Number).reduce((a, b) => a + b))
  }
});
