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
  let idx = 0;
  const n = parseInt(lines[idx++], 10);

  let countA = 0;
  let countB = 0;

  // caja A
  for (let i = 0; i < n; i++) {
    const x = lines[idx++];
    if (x === '0') countA++;
    else countB++;
  }

  const m = parseInt(lines[idx++], 10);

  // caja B
  for (let i = 0; i < m; i++) {
    const x = lines[idx++];
    if (x === '1') countB++;
    else countA++;
  }

  console.log(countA + '\n' + countB);

  // let n = parseInt(lines[0], 10)
  // let m = parseInt(lines[n + 1], 10)

  // let i = 0, j = 0
  // for (let e of lines) {
  //   if (e === '0') i++
  //   else if (e === '1') j++
  // }

  // if (m === 0) --i
  // if (n === 0) --i
  // if (m === 1) --j
  // if (n === 1) --j

  // console.log(i + '\n' + j)
});
