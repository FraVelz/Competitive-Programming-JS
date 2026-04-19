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
  const [n, p, ...arr] = lines.map(Number)

  let i = 0
  for (let e of arr) {
    if (e > p) ++i
  }
  console.log(i)

  // const arr = lines.map(Number)

  // const n = arr[0];
  // const p = arr[1];

  // let i = 0
  // for (let j = 0; j < n; j++) {
  //   if (arr[j + 2] > p) ++i
  // }
  // console.log(i)
});
