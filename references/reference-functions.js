function addBeer(beersList) {
  beersList.push("IPA");
  console.log("Dentro de la función:", beersList);
}

let beers = ["Pale Ale"];
addBeer(beers);
console.log("Fuera de la función:", beers);


// Mutación (push, pop, etc.) → todos los que comparten referencia ven el cambio.

// Reasignación (arr = ...) → sólo cambia la variable, los demás siguen con el original.


function cambiarArray(arr) {
  arr.push(4); // modifica el array original
}

const ref1 = [1, 2, 3];
const ref2 = ref1; // ref2 apunta al mismo array que ref1

cambiarArray(ref2);

console.log(ref1); // [1, 2, 3, 4]
console.log(ref2); // [1, 2, 3, 4]



function changeNumber(number){
   number = number + 1;
   console.log(`Numero interno: ${number}`);
}

let number = 1;
changeNumber(number);
console.log(`Numero externo: ${number}`);



function changeName(beer){
   beer.name = "Corona";
   console.log(`Cerveza interna: ${beer.name}`);
}

let beer = { name: "Heineken"};
changeName(beer);
console.log(`Cerveza externa: ${beer.name}`);