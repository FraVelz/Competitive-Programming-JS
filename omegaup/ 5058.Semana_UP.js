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

  if (n === 1) console.log('Lunes')
  if (n === 2) console.log('Martes')
  if (n === 3) console.log('Miercoles')
  if (n === 4) console.log('Jueves')
  if (n === 5) console.log('Viernes')
  if (n === 6) console.log('Sabado')
  if (n === 7) console.log('Domingo')
});
