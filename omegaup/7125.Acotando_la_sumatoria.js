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
  const n = parseInt(lines[0], 10);

  let res = 0
  let i = 0

  while (res < n) {
    i++
    res += 7 + i
  }

  console.log(i)

  // let res = 0
  // for (let i = 0; i < n; i++) {
  //   res += 7
  //   if ((res + i) >= n) {
  //     res = i
  //     break
  //   }
  // }
  // console.log(res)
});
