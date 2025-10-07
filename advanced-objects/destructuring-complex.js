const beer = {
   name: 'IPA',
   type: 'Ale',
   alcohol: 5.5,
   price: 4,
   brand: {
      name: 'Brand X',
      country: 'Germany',
      founded: 1990
   }
};

const {
   price,
   brand: { country, founded, name: brandName }
} = beer;

console.log(country);
console.log(founded);
console.log(brandName);
console.log(price);