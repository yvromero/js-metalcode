// Object to convert into JSON
const beerBasic = {
   "name": "IPA",
   "price": 3.5,
   "models": [300, 500, 1000],
   "brand": {
      "brand": "Brand X",
      "country": "Mexico"
   }
};

// Convert object → JSON string
const jsonBasic = JSON.stringify(beerBasic)
console.log(jsonBasic);
console.log(typeof jsonBasic);

// Replacer function: modifies values during stringify
const replacerPrice = (key, value) =>
  key === "price" ? `$ ${value}` : value;

// Convert object to JSON string with replacer and 2 spaces for indentation
const jsonWithPrice = JSON.stringify(beerPrice, replacerPrice, 2);
console.log(jsonWithPrice);
console.log(typeof jsonWithPrice); // string


// Object with a Date property
const beerDate = {
  name: "IPA",
  price: 3.5,
  release: new Date("2025-10-04")
};

// Replacer function: converts the "release" property to an ISO string
const replacerDate = (key, value) =>
  key === "release" ? value.toISOString() : value;

// Convert the object to a JSON string using replacer and 2-space indentation
const jsonWithDate = JSON.stringify(beerDate, replacerDate, 2);

console.log(jsonWithDate); //SON string with ISO date
console.log(typeof jsonWithDate); // string
