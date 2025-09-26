// flatMap
// Maps each element and flattens the result one level deep in a single step
 
const names = ['Juan Carlos', 'Juan Francisco'];

const namesSplit = names.map(n => n.split(" "));
// console.log(namesSplit);

const namesSplitFlat = namesSplit.flat();
// console.log(namesSplitFlat);

const namesFlatMap = names.flatMap(n => n.split(" "));
console.log(namesFlatMap);

// Another real example

const stock = [
   {"category": "beers", "products": ['Pilsen', 'Faxe', 'Heineken']},
   {"category": "wines", "products": ["Cabernet", "Malbec", "Merlot"]},
   {"category": "other", "products": ["Vodka", "Whiskey", "Tequila"]},
];

const productsWithoutFlatMap = stock.map(category => category.products);
console.log(productsWithoutFlatMap);

const products = stock.flatMap(category => category.products);
console.log(products);