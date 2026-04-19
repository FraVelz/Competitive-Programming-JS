# 🔹 Nivel básico (imprescindibles)

Estas no son opcionales. Si no las dominas, estás perdiendo problemas fáciles.

* **Arrays / vectores**

  * Acceso O(1)
  * Base de casi todo

* **Strings**
  * Manipulación, búsqueda, hashing básico

* **Listas enlazadas**
  * Poco usadas directamente, pero importantes conceptualmente

* **Stack (pila)**
  * Ej: paréntesis, next greater element

* **Queue (cola)**

  * BFS en grafos

---

## 🔹 Nivel intermedio (donde empieza lo serio)

Aquí es donde ya puedes resolver la mayoría de problemas tipo concurso.

* **Set / Map**

  * En C++: `set`, `unordered_set`, `map`
  * Búsqueda y ordenamiento automático
* **Priority Queue (heap)**

  * Para greedy y Dijkstra
* **Binary Search (sobre estructuras)**

  * No es estructura, pero se combina con arrays y sets
* **Prefix Sum**

  * Sumas rápidas en rangos
* **Sliding Window / Two Pointers**

  * Muy frecuente en problemas de arrays y strings

---

## 🔹 Nivel avanzado (lo que marca diferencia 🧠)

Aquí es donde empiezas a destacar en concursos fuertes.

* **Segment Tree**

  * Consultas y actualizaciones en rangos
  * Muy potente pero fácil de implementar mal
* **Fenwick Tree (Binary Indexed Tree)**

  * Similar a segment tree pero más simple
* **Disjoint Set Union (Union-Find)**

  * Componentes conexas, Kruskal
* **Sparse Table**

  * RMQ (consultas sin actualizaciones)
* **Trie**

  * Strings, prefijos

---

## 🔹 Nivel pro (solo si apuntas alto 🚀)

No siempre necesarios, pero aparecen en competencias tipo ICPC o Codeforces alto nivel.

* **Heavy-Light Decomposition**
* **Persistent Segment Tree**
* **Treaps / Splay Trees**
* **Mo’s Algorithm (queries offline)**

---

## ⚠️ Error común

Muchos creen que aprender estructuras avanzadas = ser bueno. No.

El problema real suele ser:

* No saber **cuándo usar cada una**
* No reconocer patrones
* No practicar suficiente

Puedes saber Segment Tree y aún así perder contra alguien que domina arrays + greedy + lógica.

---

## 🎯 Recomendación realista

Empieza así:

1. Arrays + sorting + binary search
2. Stack / queue + problemas clásicos
3. Prefix sums + two pointers
4. Set / map + greedy
5. Luego entra a:

   * DSU
   * Fenwick
   * Segment Tree
