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
  for (let x = 1; x < lines.length; ++x) {
    let n = parseInt(lines[x]);
    console.log(n >= 3 ? 'Ok' : 'No')
  }
});