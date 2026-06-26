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
  let text = lines[0];

  let x = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') ++x
  }
  console.log(text.length - x - 1);
});
