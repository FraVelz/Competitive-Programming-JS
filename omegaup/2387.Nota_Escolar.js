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

  if (n === 10) console.log('Excelente')
  else if (n === 9) console.log('Muy bien')
  else if (n === 8) console.log('Bien')
  else if (n === 7) console.log('Regular')
  else if (n >= 6 && n <= 7) console.log('Suficiente')
  else if (n >= 0 && n <= 5) console.log('No acredita')
});
