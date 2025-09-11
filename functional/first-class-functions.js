// Las funciones en JS son "ciudadanos de primera clase" (First-Class Functions)

// - Guardar en variables
// - Pasar como argumentos
// - Retornar desde otras funciones
function add(x, y){
   return x + y;
}

const a = add; // Se guarda la referencia de la función en otra variable

console.log(a(2, 4));

const fn = function(name){
   return `Moi ${name}`;
}

console.log(fn('Yv'));

/*
  Función que recibe otra función como parámetro (callback)
*/

function processUser(name, callback) {
   // Llama a la función recibida con el nombre
   return callback(name);
}

// Funciones que podemos pasar como argumento
function greet(name) {
   return `Hola ${name}`;
}

function shout(name) {
   return `HOLA ${name.toUpperCase()}!!!`;
}

// Usando la misma función processUser con diferentes comportamientos
console.log(processUser('Yv', greet)); // "Hola Yv"
console.log(processUser('Yv', shout)); // "HOLA YV!!!"


// ---------------------------------------------
// Función que devuelve otra función
function multiplier(factor) {
   return function (number) {
      return number * factor;
   };
}

const double = multiplier(2); // Crea una función que multiplica por 2
const triple = multiplier(3); // Crea una función que multiplica por 3

console.log(double(5)); // 10
console.log(triple(5)); // 15

//la función interna recuerda el valor de factor aunque multiplier ya haya terminado de ejecutarse