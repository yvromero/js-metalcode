// Arrow corta
const square = x => x * x;

// Arrow larga
const logAndSquare = x => {
  console.log("Calculando...");
  return x * x;
};

console.log(square(4));        // 16
console.log(logAndSquare(4));  // Calculando... 16


// Classic FUnction
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Arrow Function sin return
const addArrowShort = (a, b) => a + b;
console.log(addArrowShort(2, 2));


// Arrow FUnction con return
const addArrow = (a, b) => {
   return a + b;
};

console.log(addArrow(2, 2));

// Classic Function con Name
function saludar() {
  console.log('HOla classic');
}
saludar();

// Arrow Function (anonima) => Solo “tienen nombre” si las asignas a una variable o propiedad de un objeto
const saludarArrow = () => console.log('Moi arrow');
saludarArrow();

// Uso anonimo(callback)
setTimeout(() => console.log("Hola después de 1s"), 1000);

// Es una función anónima pasada directamente como argumento