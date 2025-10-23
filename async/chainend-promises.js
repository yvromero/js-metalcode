function makePromise(id, success) {
  return new Promise((resolve, reject) => {
    console.log(`Starting promise ${id}`);

    if (success) {
      resolve(`Promise ${id} resolved successfully`);
    } else {
      reject(`Promise ${id} was rejected`);
    }
  });
}

makePromise(1, true)
  .then(result => {
    console.log("Success:", result);
    return makePromise(2, true);
  })
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("All promises have been processed");
  });

  console.log("This thread is main");

  /* En un encadenamiento secuencial, si una promesa falla,
las siguientes no se ejecutan en absoluto.*/