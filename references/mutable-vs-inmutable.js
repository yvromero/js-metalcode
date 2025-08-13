// -------------------------------------
// Función MUTABLE que modifica el objeto original (por referencia)
// -------------------------------------
function toUpperCaseMutable(beer) {
   beer.name = beer.name.toUpperCase(); // muta el objeto original
   return beer;  // devuelve la MISMA referencia (mismo objeto)
}

const beerMutableExtern = {
   name: 'Faxe',
   price: 2.2
};

const beerMutable = toUpperCaseMutable(beerMutableExtern);

console.log('Objeto original (mutable):', beerMutableExtern);  // { name: 'FAXE', price: 2.2 }
console.log('Objeto retornado (mutable):', beerMutable);      // { name: 'FAXE', price: 2.2 }
console.log('¿Son el mismo objeto?', beerMutableExtern === beerMutable);  // true (mismo objeto)

// OBS: La mutación ocurre en el objeto original, visible fuera de la función.

// -------------------------------------
// Función INMUTABLE que no modifica el objeto original
// -------------------------------------
function toUpperCaseImmutable(beer) {
  // Crea un nuevo objeto copiando las propiedades y transformando el nombre
   const newBeer = {
    name: beer.name.toUpperCase(),  // crea un nuevo string
   };
   return newBeer; // devuelve un NUEVO objeto, distinto al original
}

const beerImmutableExtern = {
   name: 'Faxe',
   price: 2.2
};

const beerImmutable = toUpperCaseImmutable(beerImmutableExtern);

console.log('Objeto original (inmutable):', beerImmutableExtern);  // { name: 'Faxe', price: 2.2 }
console.log('Objeto retornado (inmutable):', beerImmutable);     // { name: 'FAXE', price: 2.2 }
console.log('¿Son el mismo objeto?', beerImmutable === beerImmutableExtern); // false (objetos diferentes)

// OBS: El objeto original no cambia, la mutabilidad se evita.

/*En la función mutable cambiamos directamente la propiedad del objeto recibido, por lo que el objeto externo también cambia.

En la función inmutable creamos un nuevo objeto y no tocamos el original, respetando la inmutabilidad.*/