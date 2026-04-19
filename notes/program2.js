// estructuras de datos (nivel intermedio)

// 1. set

const s = new Set();

s.add(1);
s.add(2);
s.add(2);

console.log(s); // Set(2) {1, 2}

const set = new Set([1, 2, 3]);

set.add(4);      // agregar
set.delete(2);   // eliminar
set.has(3);      // true
set.size;        // 3
set.clear();     // vacía todo

console.log(set)

/* 
Diferencia clave en una frase
* Set 👉 guarda valores (pueden ser números, strings, objetos) y los puedes recorrer
* WeakSet 👉 solo guarda objetos y no puedes recorrerlo, sirve para “referencias temporales”
*/

const ws = new WeakSet();

let obj = { name: "Juan" };

const ws = new WeakSet();
ws.add(obj);

console.log(ws.has(obj)); // true

obj = null; // obj ya no existe
console.log(ws.has(obj)); // false

// 👉 Se usa cuando quieres “marcar objetos” sin evitar que el sistema los elimine de memoria.

crearObjeto();

// 2. map

/*
similar a un objeto, a diferencia de un objeto, map puede:
✔ acepta cualquier tipo de clave
✔ no transforma las claves a strings
✔ mantiene orden confiable
✔ tiene API más clara para operaciones
✔ está pensado como estructura de datos real
util para estructuras de datos mas complejas que un objeto.

📦 Object (mejor para):
* datos JSON
* configuración
* estructuras simples
*/

const map = new Map();

map.set(true, "si");
map.set({ a: 1 }, "objeto real");

console.log(map);

/*
funcionamiento similar que weakset
la clave solo puede ser un objeto
no mantiene vivo el objeto
limitado en cuanto a operaciones
*/

const wm = new WeakMap();

let obj = { name: "Ana" };

wm.set(obj, "info");

obj = null;
