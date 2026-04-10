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
  let a = 0, b = 0

  for (let e of lines[1]) {
    if (e == '1') ++a
    else if (e == '2') ++b
  }

  console.log(`${a} ${b}`)
});
