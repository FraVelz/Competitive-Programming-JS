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
  const n = lines.join(' ').split(' ').map(Number)

  for (let e of n) { console.log('*'.repeat(e)) }
});
