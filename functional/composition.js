function showNumber(...numbers){
    for(const number of numbers){
       console.log(`Number: ${number}`);
    }
}
// showNumber(1,2,3,4,5,6,7);

const toUpper = str => str.toUpperCase();
const addPipe = str => `|${str}|`;
const addPoint = str => `${str}.`;
const addExcl = str => `${str}!`;

const result = addPoint(addPipe(toUpper("Testing")));
// console.log(result);

const compose = (...fns) => value => {
   let result = value;
   for (let i = fns.length - 1; i >= 0; i--){
      result = fns[i](result);
   }
   return result;
}

const transform = compose(addPoint, addPipe, toUpper, addExcl);
const finalResult = transform('lepoupee');
console.log(finalResult);



// Se ejecuta de der a izq