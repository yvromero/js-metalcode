// Each function simulates an asynchronous task using a callback
function fn1(callback) {
  console.log('Finished fn1');
  setTimeout(callback, 1000); // Executes the callback after 1 second
}

function fn2(callback) {
  console.log('Finished fn2');
  setTimeout(callback, 1000);
}

function fn3(callback) {
  console.log('Finished fn3');
  setTimeout(callback, 1000);
}

// Example of callback hell (nested callbacks)
fn1(() => {
  fn2(() => {
    fn3(() => {
      console.log('All tasks completed');
    });
  });
});

console.log("Doing something else while waiting...");
