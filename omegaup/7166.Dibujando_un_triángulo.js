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
  const n = parseInt(lines[0].trim(), 10);

  for (let i = 1; i <= n; i += 2) {
    console.log(' '.repeat((n - i) / 2) + '@'.repeat(i))
  }
});
