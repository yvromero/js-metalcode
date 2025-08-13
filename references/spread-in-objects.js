const beerInfo = { name: "Heineken", type: "Lager", country: "Netherlands" };
const updatedInfo = { name: "Corona", country: "Mexico" };

// El segundo spread (updatedInfo) sobrescribe propiedades repetidas
const mergedBeer = { ...beerInfo, ...updatedInfo };

console.log(mergedBeer);
// { name: "Corona", type: "Lager", country: "Mexico" }



const beer = { name: "Heineken", type: "Lager" };
const moreInfo = { price: 2.5, country: "Netherlands" };

// Combinar objetos con spread
const fullBeer = { ...beer, ...moreInfo };
console.log(fullBeer); 
// { name: "Heineken", type: "Lager", price: 2.5, country: "Netherlands" }

// Copiar un objeto (copia superficial)
const beerCopy = { ...beer };
beerCopy.name = "Corona";

console.log(beer);     // { name: "Heineken", type: "Lager" } (original intacto)
console.log(beerCopy); // { name: "Corona", type: "Lager" }
console.log(beer === beerCopy); // false (son objetos distintos)
