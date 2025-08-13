// Pasar por VALOR
/*Se hace una copia independiente del valor.

Si modificas la copia, no afecta al valor original.

Esto ocurre con los tipos primitivos*/

let a = 10;
let b = a; // b recibe una COPIA del valor de a

b = 20;

console.log(a); // 10 (no cambia)
console.log(b); // 20
console.log(a === b);


// Pasar por REFERENCIA
/*No se copia el valor, sino una referencia a la misma ubicación en memoria.

Si modificas uno, el otro también se ve afectado (porque apuntan al mismo lugar).

Esto ocurre con los tipos no primitivos: object | array | function*/

let frutas = ['manzana', 'pera'];
let otrasFrutas = frutas; // Apunta al MISMO array en memoria

otrasFrutas.push('banana');

console.log(frutas);      // ['manzana', 'pera', 'banana']
console.log(otrasFrutas); // ['manzana', 'pera', 'banana']
console.log(frutas === otrasFrutas);