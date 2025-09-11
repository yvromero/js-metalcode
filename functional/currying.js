// ============================
// 🔹 Closure básico
// ============================
// "add" devuelve otra función que recuerda el valor de 'a'
function add(a) {
   return (b) => {
      return a + b;
   }
}

const add5 = add(5); // Guarda "a = 5"
console.log(add5(5)); // 5 + 5 = 10
console.log(add5(1)); // 5 + 1 = 6


// ============================
// 🔹 Currying con arrow functions
// ============================
// Currying: cada función devuelve otra función hasta que recibe todos los argumentos
const sum = a => b => a + b;

console.log(sum(1)(1)); // 2

const sum1 = sum(1);
console.log(sum1(1));   // 2
console.log(sum1(2));   // 3


// ============================
// 🔹 Currying con varios parámetros
// ============================
// Forma larga
function mul(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}
console.log(mul(1)(2)(3)); // 6

// Forma compacta con arrow
const mulArrow = a => b => c => a * b * c;
console.log(mulArrow(1)(2)(3)); // 6


// ============================
// 🔹 Partial Application
// ============================
// Guardar pasos intermedios para reutilizar funciones
const multOne = mulArrow(2);   // fija a = 2
const multTwo = multOne(2);    // fija b = 2

console.log(multTwo(2));   // 2 * 2 * 2 = 8
console.log(multTwo(10));  // 2 * 2 * 10 = 40


// ============================
//  Conceptos
// ============================
// Closure: función que recuerda variables externas (ejemplo: add)
// Currying: dividir funciones de varios parámetros en funciones de un argumento (sum, mul)
// Partial application: guardar pasos intermedios para reutilizar funciones (multOne, multTwo)
