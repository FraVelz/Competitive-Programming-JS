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

  for (let i = 0; i < n; i++) {
    let c = '';
    if (i & 1) c = 'a'
    else c = 'o'

    console.log(c.repeat(i) + 'X' + c.repeat(n - i - 1))
  }
});
