// Object example
const beer = {
  name: "IPA",
  price: 3.5,
  country: "Mexico"
};

// Convert object to array of [key, value] pairs
const entries = Object.entries(beer);

console.log(entries);
/* Output:
[
  ["name", "IPA"],
  ["price", 3.5],
  ["country", "Mexico"]
]
*/

// You can also iterate over entries
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
/* Output:
name: IPA
price: 3.5
country: Mexico
*/

// Another option
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
