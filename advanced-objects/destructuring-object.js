const beers = [
  { name: 'IPA', alcohol: 6.5 },
  { name: 'Stout', alcohol: 8.0 },
  { name: 'Lager', alcohol: 5.0 },
  { name: 'Pilsener', alcohol: 4.5 },
  { name: 'Wheat Beer', alcohol: 5.5 },
];

// Convert array to object in one pipeline
const beersObj = Object.fromEntries(
  beers.map(({ name, alcohol }) => [name, alcohol])
);

//console.log(beersObj); // { IPA: 6.5, Stout: 8, Lager: 5, Pilsener: 4.5, 'Wheat Beer': 5.5 }

// Tipo: método estático de Object

// Función: toma un array de pares [key, value] y lo convierte en un objeto

// Devuelve: un objeto con las claves y valores proporcionados

// Desestructuración dinámica usando Object.entries
Object.entries(beersObj).forEach(([name, alcohol]) => {
  //console.log(`${name}: ${alcohol}`);
});
// IPA: 6.5
// Stout: 8
// Lager: 5
// Pilsener: 4.5
// Wheat Beer: 5.5

const beer = {
      name: 'IPA',
      type: 'Ale',
      alcohol: 5.5,
      price: 3.5
};

const { name, type } = beer; // Inmutable
const { name: beerName } = beer;

console.log(`Name: ${name}`);
console.log(`Type: ${type}`);
console.log(beer);
console.log(beerName);