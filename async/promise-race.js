function task(id, time, success = true) {
  return new Promise((resolve, reject) => {
    console.log(`Initializing ${id} during this time ${time}ms`);
    setTimeout(() => {
      if (success) {
        resolve(`Task ${id} completed`);
      } else {
        reject(`Task ${id} with an error`);
      }
    }, time);
  });
}

Promise.race([task(1, 400, false), task(2, 500), task(3, 700)])
  .then((result) => {
    console.log('Winner:', result);
  })
  .catch((error) => {
    console.error('An unexpected error occurred:', error);
  });

/* Promise.race():

Establece timeouts (esperar respuesta o cancelar por demora)
Tomar el resultado mas rapido entre varios endpoints o servicios  */
