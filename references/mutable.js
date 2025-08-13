// -------------------------
// MUTABILIDAD Y REFERENCIAS
// -------------------------

// Primitivos son INMUTABLES
const nochange = 12345;
// nochange = 123456;  // Error: no se puede reasignar const

const myNameInm = 'Yvy';
console.log(myNameInm[0]);  // Y

myNameInm[0] = 'I';         // No cambia porque es primitivo
console.log(myNameInm);     // Yvy

let myNameMun = 'Yvo';
console.log(myNameMun);     // Yvo

myNameMun = 'Ivo';          // LET permite reasignar (crear una nueva copia)
console.log(myNameMun);     // Ivo


// -------------------------
// OBJETOS Y ARRAYS SON MUTABLES
// pero las referencias a ellos pueden ser constantes o variables
// -------------------------

// OBJETOS con CONST
const beerConst = { name: 'Heineken' };
// beerConst = { name: 'Faxe' };   // Error: no se puede reasignar const
beerConst.name = 'Faxe';          // ✅ Mutación permitida
console.log(beerConst.name);     // Faxe

// OBJETOS con LET
let beerLet = { name: 'Heineken' };
beerLet = { name: 'Faxe' };        // ✅ Reasignación permitida
beerLet.name = 'Faxe';            // ✅ Mutación permitida
console.log(beerLet.name);       // Faxe


// ARRAYS con CONST
const beersConst = ['Faxe', 'Heineken', 'Schöfferhofer'];
// beersConst = ['Faxe', 'Heineken', 'Corona'];  //Error: no se puede reasignar const
beersConst[0] = 'Corona';                       // ✅ Mutación permitida
console.log(beersConst);                       // ['Corona', 'Heineken', 'Schöfferhofer']

// Declaración con LET
let beersLet = ['Faxe', 'Heineken', 'Schöfferhofer'];
beersLet = ['Faxe', 'Heineken', 'Corona'];   // ✅ Reasignación permitida
beersLet[0] = 'Corona';                     // ✅ Mutación permitida
console.log(beersLet);                     // ['Corona', 'Heineken', 'Corona']


// Métodos que modifican el array original: push, pop, shift, unshift, splice, etc.

beersLet.unshift('Pilsen');   // Agrega al inicio
beersLet.push('Pilsen');      // Agrega al final
console.log(beersLet);        // ['Pilsen', 'Corona', 'Heineken', 'Corona', 'Pilsen']
