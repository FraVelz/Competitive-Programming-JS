'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines: string[] = [];

rl.on('line', (line: string) => {
  lines.push(line);
});

rl.on('close', () => {
  const num = lines[0];
  console.log(num[num.length - 1])
});