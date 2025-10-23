function task(id, time, success = true) {
  return new Promise((resolve, reject) => {
    console.log(`Initializing task ${id}, it will take ${time} ms`);

    setTimeout(() => {
      if (success) {
        resolve(`Task ${id} completed successfully`);
      } else {
        reject(`Task ${id} failed with an error`);
      }
    }, time);
  });
}

Promise.any([
  task(1, 2000),
  task(2, 4000, false),
  task(3, 3000, false)
])
  .then(result => {
    console.log("At least one task finished successfully:");
    console.log(result);
  })
  .catch(error => {
    console.error("All tasks failed:");
    error.errors.forEach(err => console.log(err));
  });

 // Promise.any: resolves with the first successful promise.
// If all promises fail, it triggers the catch block.
