let name = 'Jean';

if(true){
   let name = 'Frank'
   console.log('If-Intern-');
   console.log(name);
} 

console.log('-Extern-');
console.log(name);

hi();
function hi(){
   name = 'Ann';
   console.log('Function-Intern');
   console.log(name);
}


// ¿Qué se hoistea?
// Declaraciones var → Se hoistea la declaración, no la asignación.

// Funciones declaradas (function foo() {}) → Se hoistea todo (nombre y cuerpo).

// Funciones expresadas (const foo = function() {}) → No se hoistea la asignación.

// let y const → Se hoistean de forma "temporalmente muerta", es decir, se reservan pero no se pueden usar antes de su declaración.


// Ejemplo con funciones:
sayHi(); // ✅ funciona
function sayHi() {
  console.log("Hola!");
}

sayBye(); // ❌ TypeError: sayBye is not a function
const sayBye = function() {
  console.log("Chau!");
};

// Ejemplo con var (se hoistea la declaración):
console.log(a); // undefined
var a = 5;

// Internamente JS lo interpreta así:
var a;
console.log(a); // undefined
a = 5;

// Ejemplo con let (no usable antes):
console.log(b); // ❌ ReferenceError
let b = 10;
