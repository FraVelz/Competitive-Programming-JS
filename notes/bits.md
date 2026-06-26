Vas bien 👍 — lo de `(a & 1)` es correcto, pero es solo la punta del iceberg. Si quieres aprender lo básico **de verdad útil para competitiva**, hay un conjunto pequeño de ideas que te da muchísimo poder.

Te lo explico sin humo 👇

---

# 🧠 1. Qué estás manipulando realmente

Un número en binario es esto:

[
13 = 1101 = 8 + 4 + 1
]

Cada bit = una potencia de 2 activada.

👉 Programar con bits = encender/apagar esas potencias.

---

# ⚙️ 2. Operadores básicos (los que sí importan)

## 🔹 AND (`&`)

Compara bit a bit:

```text
1 & 1 = 1
1 & 0 = 0
0 & 0 = 0
```

### 💡 Usos clave:

* ✔ `(a & 1)` → impar/par
* ✔ comprobar si un bit está activo:

```c
(a & (1 << i)) != 0
```

---

## 🔹 OR (`|`)

```text
1 | 0 = 1
0 | 0 = 0
```

👉 Sirve para **encender bits**

```c
a | (1 << i)
```

---

## 🔹 XOR (`^`)

```text
1 ^ 1 = 0
1 ^ 0 = 1
```

👉 Sirve para **alternar bits**

```c
a ^ (1 << i)
```

---

## 🔹 NOT (`~`)

Invierte todo (ojo con esto, da problemas con negativos ⚠️)

---

## 🔹 SHIFT (`<<`, `>>`)

```c
a << 1  → multiplica por 2
a >> 1  → divide entre 2 (entero)
```

---

# 🔥 3. Trucos IMPORTANTES (estos sí son de competitiva)

---

## 🟢 1. Saber si es potencia de 2

```c
(a & (a - 1)) == 0
```

👉 Solo funciona si `a > 0`

---

## 🟢 2. Eliminar el último 1

```c
a = a & (a - 1)
```

👉 lo que ya viste — clave para contar bits

---

## 🟢 3. Contar unos (popcount)

```c
while (a) {
    a &= (a - 1);
    count++;
}
```

---

## 🟢 4. Obtener el último bit encendido

```c
a & (-a)
```

Ejemplo:

```text
110100 → 000100
```

👉 esto es MUY usado

---

## 🟢 5. Recorrer subconjuntos (nivel competitivo real)

```c
for (int sub = mask; sub; sub = (sub - 1) & mask)
```

👉 esto ya es más avanzado, pero es oro

---

# ⚠️ Error típico que estás cometiendo (normal)

Probablemente estás intentando:

> “memorizar fórmulas”

❌ Mala idea
✅ Mejor: entender qué hace cada operación bit a bit

---

# 🧠 Intuición rápida (lo más importante)

* `&` → filtra bits
* `|` → añade bits
* `^` → cambia bits
* `<<` → mueve bits (multiplica)
* `>>` → mueve bits (divide)

---

# 🚀 Si quieres avanzar bien

Te recomendaría este orden:

1. Practicar conversiones binario ↔ decimal
2. Jugar con `&`, `|`, `^` en ejemplos pequeños
3. Entender `n & (n - 1)` y `n & -n`
4. Luego problemas simples de bitmask

---

Si quieres, puedo darte **5 ejercicios progresivos (nivel competitivo real)** para que esto no se quede en teoría.
