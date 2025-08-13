// Ejemplo de copia superficial con spread
const beer1 = { name: 'Heineken', price: 2.2, type: 'lager' };
const beer2 = { ...beer1 };
beer2.name = 'Faxe'; // No afecta a beer1

console.log(beer1); // { name: 'Heineken', price: 2.2, type: 'lager' }
console.log(beer2); // { name: 'Faxe', price: 2.2, type: 'lager' }
console.log(beer1 === beer2); // false (objetos distintos)

// Función inmutable usando spread
function toUpperCaseInmutable(beer) {
   return { ...beer, name: beer.name.toUpperCase() };
}

const beer3 = toUpperCaseInmutable(beer1);
console.log(beer3); // { name: 'HEINEKEN', price: 2.2, type: 'lager' }
console.log(beer1); // { name: 'Heineken', price: 2.2, type: 'lager' }
console.log(beer3 === beer1); // false


// Ejemplo del problema de copia superficial: El spread no clona en profundidad
const beerDeep = { name: 'Heineken', ingredients: { malt: true, hops: true } };
const beerDeepCopy = { ...beerDeep };

beerDeepCopy.ingredients.malt = false;

console.log(beerDeep.ingredients.malt); // ❌ false (se afectó el original)
