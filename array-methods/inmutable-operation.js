const users = [
   { id: 1, name: 'Pedro'},
   { id: 2, name: 'Maria'},
   { id: 3, name: 'Juan'},
];

// Push - Mutable: changes the original array and returns the new length
const userWithFrancisco = users.push({id: 1, name: 'ArrayModificado'});
console.log(users);

// Spread Operator - Immutable add: creates a new array with the extra element
const userWithFrancis = [...users,
   { id: 4, name: 'Francis'}
];
console.log(userWithFrancis); // new array
console.log(users);           // original array unchanged

// Filter - Immutable remove: returns a new array without the matching element
const usersWithoutPedro = users.filter(user => user.id !== 1);
console.log(usersWithoutPedro);

// Map - Immutable update: returns a new array with the modified element
const usersUpdated = users.map(user => user.id === 3
   ? {...user, name: 'Frank'} // shallow copy + change name
   : user
);
console.log(usersUpdated);