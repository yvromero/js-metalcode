function task(id, timeout, success=true) {
   return new Promise((resolve, rejected) => {
      console.log(`Initializing task with  id ${id} will be take ${timeout}`);

      setTimeout(() => {
         if (success){
          resolve(`Task ${id} completed`)
         }else{
          rejected(`Task ${id} failed`);
         }
      }, timeout);
   })
}
Promise.allSettled([
   task(1, 1000),
   task(2, 2000, false),
   task(3, 1000)
]).then((results) => {
   console.log("Result of all tasks", results);
});

// Promise.allSettled: waits for all promises to settle (either fulfilled or rejected)
// and returns an array of objects describing the outcome of each promise.
