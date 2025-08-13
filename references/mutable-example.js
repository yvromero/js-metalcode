// CON CONST
const birras1 = ['Faxe', 'Heineken', 'Schöfferhofer'];

function changeArrayIntern(arr) {
  arr.push('Moi');  // muta el array original, está permitido
}

changeArrayIntern(birras1);
console.log(birras1); // ['Faxe', 'Heineken', 'Schöfferhofer', 'Moi']

// Reasignación da error:
// birras1 = ['Corona']; // Error: Assignment to constant variable.


// CON LET
let birras2 = ['Faxe', 'Heineken', 'Schöfferhofer'];

function changeArrayIntern2(arr) {
  arr.push('Moi');  // también permitido
}

changeArrayIntern2(birras2);
console.log(birras2); // ['Faxe', 'Heineken', 'Schöfferhofer', 'Moi']

// Reasignación NO da error:
birras2 = ['Corona'];  // Reasignación válida
console.log(birras2); // Output: ['Corona']
