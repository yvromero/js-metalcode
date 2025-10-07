// JSON text (string) that represents an object
const json = '{"name":"IPA","price":3.5,"models":[300,500,1000],"brand":{"brand":"Brand X","country":"Mexico"}}';

// Convert the JSON string into a real JavaScript object
const beer = JSON.parse(json);

console.log(beer);          // Prints the parsed object
console.log(typeof beer);   // "object"

// ------------------------------
// JSON.parse can receive an optional "reviver" function
// It allows you to transform values during the parsing process
// ------------------------------

const beerEx = JSON.parse(json, (key, value) => {
   if (key === "price") {
      return `$ ${value}`; // Intercept and transform this property
   }
   return value; // Return the original value for other properties
});

console.log(beerEx);         // The "price" property is now formatted with a "$"
console.log(typeof beerEx);  // Still an "object"


// Another Example
// Texto JSON con una fecha como string
const jsonDate = '{"name":"IPA","price":3.5,"release":"2025-10-04"}';

// Reviver convierte la propiedad "release" en un objeto Date
const beerDate = JSON.parse(jsonDate, (key, value) =>
  key === "release" ? new Date(value) : value
);

console.log(jsonDate);
console.log(typeof beerDate.release); // object (es un Date)
console.log(beerDate.release.toDateString()); // muestra la fecha legible
