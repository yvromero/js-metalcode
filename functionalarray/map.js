const originalNumbers = [1, 2, 3, 4, 5];

function map(arr, fn){
   const arrayResult = [];

   for(let i = 0; i < arr.length; i++){
       const element = fn(arr[i]);
       arrayResult.push(element);
   }

   return arrayResult;
}

const copyNumbers = map(originalNumbers, (n) => n * 2);
console.log(copyNumbers);
console.log(originalNumbers);


// Example with Map Method

const mapNumbers = originalNumbers.map(n => n * 2);
console.log(mapNumbers);

// Example with Map Method + params

const mapNumbersWithParams = originalNumbers.map((n, index, arr) => {
   console.log(`index: ${index}, value: ${n}, array: ${arr}`);
   return n * 2;
});
console.log(mapNumbersWithParams);