// filter: returns a new array with elements that pass the test; original not mutated

const originalNumbers = [1, 2, 5, 3, 7, 32, 12, 100, 30, 12, 41, 34];

function filterArray(arr, fn){
    const arrayResult = [];
    
    for(let i = 0; i<arr.length; i++){
       if(fn(arr[i])){
          arrayResult.push(arr[i]);
       }
    }
    return arrayResult;
}

const manualFilterNumbers = filterArray(originalNumbers, (n) => n >= 100);

console.log(manualFilterNumbers);
console.log(originalNumbers);

const filterNumbers = originalNumbers.filter(n => n >= 10);


// Example: map with all parameters (value, index, array)

const filterNumberWithParams = originalNumbers.filter((n, index, arr) => {
   console.log(`index: ${index}, element: ${n}, array: ${arr}`);
   return n >= 80;
});
console.log(filterNumberWithParams);
console.log(originalNumbers);