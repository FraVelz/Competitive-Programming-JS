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

  for (let i = 1; i < n * 2; i += 2) {
    const line1 = parseInt(lines[i])
    const line2 = lines[i + 1]

    let b1 = true, b2 = true

    for (let j = 0; j < line1; j++) {
      if (line2[j] !== 'B') b1 = false
      else if (line2[j] !== 'N') b2 = false
    }

    if (b1) console.log('Bold')
    else if (b2) console.log('Non bold')
    else console.log('Some bold')
  }
});
