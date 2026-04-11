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
  let t = lines.join(' ').split(' ')

  let flag = true

  for (let i = 0; i < t.length; i++) {
    if (flag && t[i].length > 0) {
      t[i] = t[i][0].toUpperCase() + t[i].slice(1)
      flag = false
    }

    let last = t[i][t[i].length - 1]
    if (last === '.' || last === '!' || last === '?') {
      flag = true
    }
  }
  console.log(t.join(' '))
});
