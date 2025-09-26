// some()
/* Tests whether at least one element in the array passes the test implemented by
the provided function.
It returns true if any element passes the test, otherwise it returns false.*/

const beers = [
  { name: 'IPA', alcohol: 6.5 },
  { name: 'Stout', alcohol: 8.0 },
  { name: 'Lager', alcohol: 5.0 },
  { name: 'Pilsener', alcohol: 4.5 },
  { name: 'Wheat Beer', alcohol: 5.5 },
];

const thereAreStrongBeers = beers.some(beer => beer.alcohol > 10.0);
console.log(`Are there strong beers? ${thereAreStrongBeers}`); // false

// Another example
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(
  (num) => num % 2 === 0
);
console.log(hasEvenNumber); // true