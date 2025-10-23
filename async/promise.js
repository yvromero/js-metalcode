const promise = new Promise((resolve, reject) => {
   console.log("Initializing the promise");
   resolve("The promise has been successfully resolved");
});

promise.then(result => {
   console.log(result)
}).catch(error => {
   console.error(error);
});


console.log("Doing something else");

// Promise.all: runs all promises in parallel, resolves when all succeed,
// rejects immediately if any promise fails.

// Promise.allSettled: runs all promises in parallel, waits for all to settle,
// returns an array with the outcome (fulfilled or rejected) of each promise.

// Promise.any: runs all promises in parallel, resolves with the first fulfilled promise,
// rejects only if all promises fail.

// Promise.race: runs all promises in parallel, resolves or rejects as soon as
// the first promise settles (fulfilled or rejected).

// Chaining (then chain) → runs one after another; stops on first rejection.

// Sequential vs Parallel: .then() encadenado es secuencial, mientras que los métodos all, any, race, allSettled son paralelos.