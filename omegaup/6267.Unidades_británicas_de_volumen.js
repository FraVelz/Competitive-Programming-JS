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
  let [g, c, p, t, o] = lines[0].split(' ').map(Number)

  t += parseInt(o / 8)
  p += parseInt(t / 2)
  c += parseInt(p / 2)
  g += parseInt(c / 4)

  console.log(g, c % 4, p % 2, t % 2, o % 8)
});
