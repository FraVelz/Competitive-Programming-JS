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
  const p = lines[1]
  let arr = lines.slice(2)

  const ind = arr.indexOf(p)
  if (ind !== -1) arr.splice(ind, 1)

  console.log(arr.join('\n'))
});
