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

  if (n < 0) {
    console.log('Muy frio');
  } else if (n < 10) {
    console.log('Frio');
  } else if (n < 20) {
    console.log('Templado');
  } else if (n < 25) {
    console.log('Calido');
  } else { console.log('Muy Calido') }
});
