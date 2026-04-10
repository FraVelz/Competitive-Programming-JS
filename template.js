// utiliza readline de nodejs
const readline = require('readline');

// crea una interfaz de entrada y salida de datos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// obtiene la entrada de datos y lo guarda en "lines" como array y elemento
//        cada linea de datos [line1, line2, ...]
const lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

// evento que se ejecuta cuando Ya no hay más input es decir cuando el evento 
//        'line' no obtenga mas datos
rl.on('close', () => {
  const t = parseInt(lines[0]);

  for (let i = 0; i < t; i++) {
    // Your code here
  }
});
