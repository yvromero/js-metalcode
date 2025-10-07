const beer = {
      name: 'IPA',
      type: 'Ale',
      alcohol: 5.5,
      price: 3.5
};

const { alcohol, ...beer1 } = beer;

console.log(beer);
console.log(beer1); // Inmutable 
console.log(`Alcohol: ${alcohol}`);
