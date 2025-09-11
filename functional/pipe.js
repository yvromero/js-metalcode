pipe = (...fns) => value => {
   let result = value;
   for (const fn of fns){
      result = fn(result);
   }
   return result;
}

const toUpper = str => str.toUpperCase();
const addPipe = str => `|${str}|`;
const addPoint = str => `${str}.`;
const addExcl = str => `${str}!`;

const transform = pipe(addExcl, toUpper, addPipe, addPoint);
const finalResult = transform('lepoupee');
console.log(finalResult);

// Se ejecuta de izq a der
