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
  // const n = parseInt(lines[0], 10);

  for (let i = 1; i < n; i += 2) {
    const x = lines[i]
    const y = lines[i + 1]

    const b1 = true, b2 = true
    let temp
    lines[i + 1].split('').forEach(e => {

      if (i === 1) temp = e
      else {
        if (b1 && temp === e && temp === 'B') {
          b2 = false
        } else if (b2 && temp === e && temp === 'N') {
          b1 = false
        } else {
          b1 = false
          b2 = false
        }
      }
    })
  }
});
