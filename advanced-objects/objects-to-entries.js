// Array of [key, value] pairs
const entries = [
  ["name", "IPA"],
  ["price", 3.5],
  ["country", "Mexico"]
];

// Convert array of entries back to object
const beer = Object.fromEntries(entries);

console.log(beer);
/* Output:
{
  name: "IPA",
  price: 3.5,
  country: "Mexico"
}
*/

console.log(typeof beer); // "object"


// Utility
const modifiedBeer = Object.fromEntries(
  entries.map(([key, value]) => key === "price" ? [`${key}`, `$ ${value}`] : [key, value])
);

console.log(modifiedBeer);
/* Output:
{
  name: "IPA",
  price: "$ 3.5",
  country: "Mexico"
}
*/
