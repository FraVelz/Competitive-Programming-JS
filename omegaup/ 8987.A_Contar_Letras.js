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
  //  consideraciones: sin utilizar .size()
  const text = lines[0];
  let res = 0

  for (let c of text) {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) ++res
  }

  console.log(res)
});
