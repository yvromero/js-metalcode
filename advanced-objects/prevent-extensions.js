"use strict";

// Object can't receive new properties
const car = { 
  brand: "Toyota", 
  year: 2020, 
  engine: { type: "V8" } 
};

Object.preventExtensions(car); // only top-level

// car.color = "red"; // can't add new prop
car.year = 2022;      // can modify existing
delete car.brand;     // can delete

// inner object still extensible
car.engine.type = "V6";  // allowed
car.engine.power = "300hp"; // allowed, inner object not protected

console.log(car);
/* Output:
{
  year: 2022,
  engine: { type: "V6", power: "300hp" }
}
*/