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
  let t = lines.join('').trim()

  if (t.length > 4) {
    t = `${t.at(0)}${t.length - 2}${t.at(-1)}`
  }

  console.log(t)
});
