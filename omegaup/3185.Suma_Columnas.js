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
  let [n, ...arr] = lines

  let [x, y] = n.split(' ').map(Number)
  arr = arr.map((e) => e.split(' ').map(Number))

  let res = []
  for (let i = 0; i < y; i++) {
    let sum = 0
    for (let j = 0; j < x; j++) { sum += arr[j][i] }
    res.push(sum)
  }


  console.log(res.join('\n'))
});
