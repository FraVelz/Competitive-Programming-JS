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
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const mid = Math.floor(n / 2);

  for (let i = 0; i <= mid; i++) {
    const spaces = ' '.repeat(mid - i);
    const text = letters.slice(mid - i, mid + i + 1);

    console.log(spaces + text);
  }
});
