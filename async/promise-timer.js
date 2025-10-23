function fn1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Ends fn1");
      resolve(); // avisa que terminó
    }, 2000);
  });
}

function fn2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Ends fn2");
      resolve(); // necesario para continuar al siguiente .then()
    }, 2000);
  });
}

function fn3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Ends fn3");
      resolve(); // idem
    }, 2000);
  });
}

fn1()
  .then(() => fn2())
  .then(() => fn3())
  .catch(error => {
    console.error("Error on the promises:", error);
  })
  .finally(() => {
    console.log("All promises have been processed");
  });

console.log("Doing something else");
