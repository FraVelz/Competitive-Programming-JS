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
  const [n, arr] = [parseInt(lines[0], 10), lines[1].split(' ').map(Number)]

  let isImpar = arr.map((x) => (x & 1) ? 1 : 0)

  function mostrar(array) {
    let output = ''

    for (let i = 0; i < n * n; i++) {
      output += array[i]

      if ((i + 1) % n === 0) {
        console.log(output)
        output = ''
      }
    }
  }

  mostrar(arr)
  mostrar(isImpar)
});
