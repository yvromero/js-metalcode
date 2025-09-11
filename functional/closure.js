// 
// A function that “remembers” the variables from its creation context, even after that context has finished executing
// Closure: A function with memory.
//

function closure(name){
   let count = 0;

   return function(){
      count++;
      console.log(`${name} ejecutandose: ${count} veces`);
   }
}

const c1 = closure("closure 1");
c1();
c1();

const c2 = closure("closure 2");
c2();
c2();

// Obs: This returns a function, so it is a higher-order function.