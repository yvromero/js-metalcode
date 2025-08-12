const array = [1,2,3,4,5];
const names = ['Yv', 'Manv'];
const mixto = ['texto', 42, true, null];
const frutas = ['manzana', 'banana', 'pera'];

console.log(array);
console.log(names[0]);
console.log(names[names.length - 1]);


for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

frutas.forEach((fruta, index) => {
  console.log(fruta, index);
});