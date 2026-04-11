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
  let data = []

  for (let i = 1; i <= n; i++) {
    data.push(Math.log(parseFloat(lines[i])))
  }

  // promedio / media
  const avg = (data.reduce((a, b) => a + b)) / data.length

  // varianza
  const var_ = data.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / (data.length - 1)

  // desviacion estandar
  const o_ = Math.sqrt(var_)

  const vs = avg - 2 * o_,
    s = avg - o_,
    m = avg,
    l = avg + o_,
    vl = avg + 2 * o_

  // const format = (...arr) => {
  //   let output = ''

  //   for (let i = 0; i < arr.length; i++) {
  //     output += Math.round(arr[i])
  //     if (i < arr.length - 1) output += '\n'
  //   }

  //   return output
  // }

  const format = (...arr) => arr.map(x => (Math.exp(x).toFixed(2))).join('\n')

  console.log(format(vs, s, m, l, vl))
});
