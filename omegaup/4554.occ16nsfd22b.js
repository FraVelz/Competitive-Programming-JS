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
  let m = lines[1].split(' ').map(Number)
  let m_new = m

  while (m_new.length > 1) {
    m = m_new
    m_new = []

    for (let j = 0; j < m.length - 1; j++) {
      m_new.push(m[j] + m[j + 1])
    }
  }

  console.log(m_new[0])
});
