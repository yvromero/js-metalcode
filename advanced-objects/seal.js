"use strict";

// Seal locks add/delete but allows modifying existing props
const product = { 
  name: "Laptop", 
  price: 1000, 
  specs: { cpu: "i7" } 
};

Object.seal(product); // only top-level sealed

// product.brand = "HP"; // can't add
// delete product.price; // can't delete
product.name = "Tablet"; // can modify existing

// Inner object not sealed
product.specs.cpu = "Ryzen 9"; // allowed

console.log(product);
/* Output:
{
  name: "Tablet",
  price: 1000,
  specs: { cpu: "Ryzen 9" } // inner object modified
}
*/
