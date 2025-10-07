"use strict";

// Shallow freeze → only top-level properties are locked
const user = { 
  name: "Alice", 
  age: 30, 
  hobbies: { hobby1: "playing games" } 
};

Object.freeze(user); // freeze first level only

// user.country = "Paraguay"; // can't add new prop
// delete user.age; // can't delete
// user.name = "Bob"; // can't modify

// Inner object still editable (not frozen)
user.hobbies.hobby1 = "coding"; // allowed

console.log(user);
/* Output:
{
  name: "Alice",
  age: 30,
  hobbies: { hobby1: "coding" } // inner value changed
}
*/

// Clone object (shallow copy)
const userClone = { ...user };

// Freeze clone (top level only)
Object.freeze(userClone);

userClone.age = 20; // can't modify top-level props
console.log(userClone);