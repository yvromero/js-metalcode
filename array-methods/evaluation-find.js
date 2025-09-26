// find()
// Returns the value of the first element in the array that satisfies the provided
// testing function. Otherwise, undefined is returned.

const beers = [
  { name: 'IPA', alcohol: 6.5 },
  { name: 'Stout', alcohol: 8.0 },
  { name: 'Lager', alcohol: 5.0 },
  { name: 'Pilsener', alcohol: 4.5 },
  { name: 'Wheat Beer', alcohol: 5.5 },
];

const beerWithHighAlcohol = beers.find((beer) => beer.alcohol > 6.0);
console.log(beerWithHighAlcohol);

// Another example
const numbers = [1, 2, 3, 4, 5];

// using one parameter
const founderNumber = numbers.find((num) => num > 3);
// const founderNumber = numbers.find((num) => num > 3);
console.log(founderNumber); // 4

// using no parameters (callback ignores elements)
const firstElement = numbers.find(() => true);
console.log(firstElement); // 1

// 2 parameters: element and index
const founderWithIndex = numbers.find((num, index) => {
  console.log(`Checking index: ${index}, value: ${num}`);
  return num > 4;
});
console.log(founderWithIndex); // 5
