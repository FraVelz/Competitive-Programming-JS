// estructuras de datos (nivel básico)

// 1. array
const arr = [1, 2, 3, 4, 5];

// 2. string
const str = "hello world";

// 3. lista enlazadas (singly linked list) (no son tan comunes en js, ni obtimizados en el mismo)
//                 (uso de forma educativa, mas que de practica)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) { // agregar al final
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // mostrar la lista
  print() {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// uso
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print(); // 10 -> 20 -> 30


// 4. stack (pila)
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3

// 5. queue (se puede simular con array pero esta es mas eficiente)
//       (shift() es lento en arrays grandes porque reordena todos los elementos)

// En vez de borrar elementos, solo movemos un puntero (front)
// para muchos elementos, se puede hacer compatacion una limpieza manual cada 
// cierto elementos registrados en front para liberar memoria
class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.front >= this.items.length) return undefined;
    return this.items[this.front++];
  }
}
