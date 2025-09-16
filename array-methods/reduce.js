// reduce()
// Executes a reducer function on each element of the array, resulting in a single output value
// No inmutable

const numbers = [1, 2, 3, 4, 5];

function reduceImplement(arr, fn, initialValue){
   let acc = initialValue;

   for(let i = 0; i< arr.length; i++){
      acc = fn(acc, arr[i]);
   }
   return acc;
}

const result = reduceImplement(numbers, (acc, num) => acc + num, 0);
//console.log(result);
//console.log(numbers);


const resultReduce = numbers.reduce((acc, num, index, arr) => {
   console.log(`index: ${index}, value: ${num}, acc: ${acc}, array: ${arr}`);

   return acc + num;
}, 0);

console.log(resultReduce);
console.log(numbers

);

// Another Example of Reduce
const numbers1 = [1, 2, 3];
const result1 = numbers1.reduce((acc, currentValue) => {
   return acc + currentValue;
}, 0);

// const example = numbers1.reduce((acc, n) => acc + n, 0);

console.log(result1); // 6
console.log(example); // 6