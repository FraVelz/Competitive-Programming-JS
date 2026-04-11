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
  const t = lines.join('')
  const x = [...t].filter(c => c === 'e').length
  console.log(x)
});
