// Impure function => Cambia datos externos o globales
// Tiene efectos secundarios ( modificar un array global, cambiar el DOM, escribir en consola)
const numbers = [1, 2, 3, 4, 5];
function addNumber(arr, number){
   arr.push(number);
};

console.log(numbers);
addNumber(numbers, 6);
console.log(numbers);


// Pure function => Para los mismos argumentos, siempre devuelve el mismo resultado y no modifica nada fuera de ella (sin efectos secundarios).
const letters = ['A', 'B', 'C'];
function addLetter(arr, letter){
   return [...arr, letter]
}
const lettersExtern = addLetter(letters, 'D')
console.log(letters);
console.log(lettersExtern);