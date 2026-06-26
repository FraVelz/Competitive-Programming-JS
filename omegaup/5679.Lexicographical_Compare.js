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
  // logica correcta (el input falla en js, pero funciona en c#)
  let [a, b] = [
    lines[0].match(/-?\d+(\.\d+)?/g).map(Number),
    lines[1].match(/-?\d+(\.\d+)?/g).map(Number)
  ];

  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) { console.log('Less'); return }
    if (a[i] > b[i]) { console.log('Greater'); return }
  }

  console.log('Equal');
});
