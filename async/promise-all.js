// Define an asynchronous task that returns a Promise
function task(id, time, success = true) {
  return new Promise((resolve, reject) => {
    console.log(`Starting task ${id}, it will take ${time} ms`);

    // Simulate an async operation using setTimeout
    setTimeout(() => {
      if (success) {
        resolve(`Task ${id} completed`);
      } else {
        reject(`Error in task ${id}`);
      }
    }, time);
  });
}

// Execute multiple promises in parallel
Promise.all([
  task(1, 1000, false),  // This one will fail
  task(2, 2000),         // These two will succeed
  task(3, 3000)
])
  .then((results) => {
    // This only runs if ALL tasks succeed
    console.log("All tasks have been completed successfully");
    console.log(results); // Array of resolved values
  })
  .catch((error) => {
    // If ANY of the promises fails, this block runs
    console.error("Error in one of the tasks:", error);
  });

/*Si una promesa falla (reject), el .catch se ejecuta inmediatamente,
y no se espera el resultado del resto.

Sin embargo  — las otras promesas no se “detienen” si ya fueron lanzadas.
Solo que Promise.all deja de escucharlas. */

//Promise.all cancela el flujo (pasa al catch) en cuanto una promesa falla,
// pero no “mata” las otras tareas ya iniciadas.