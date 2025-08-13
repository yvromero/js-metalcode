const beers = ["Heineken", "Corona"];
const moreBeers = ["Faxe", "Guinness"];

// Combinar arrays con spread
const allBeers = [...beers, ...moreBeers];
console.log(allBeers); // ["Heineken", "Corona", "Faxe", "Guinness"]

// Copiar un array (copia superficial)
const beersCopy = [...beers];
beersCopy.push("Budweiser");

console.log(beers);     // ["Heineken", "Corona"] (original intacto)
console.log(beersCopy); // ["Heineken", "Corona", "Budweiser"]
console.log(beers === beersCopy); // false (son arrays distintos)