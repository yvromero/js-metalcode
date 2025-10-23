console.log("Test started");

setTimeout(() => {
  console.log("3 seconds have passed");
}, 3000);

// Define a closure factory with clear naming
const createLogger = (value) => {
  return () => {
    console.log(`Executed after 1 second with value: ${value}`);
  };
};

// Schedule closure execution
setTimeout(createLogger("Dui"), 1000);

console.log("Test ended");


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => { // IIFE (Immediately Invoked Function Expression)
  console.log("Test started");

  await wait(1000);
  console.log("Executed after 1 second with value: Dui");

  await wait(2000);
  console.log("3 seconds have passed");

  console.log("Test ended");
})();


// Classic version
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function runTest() {
  console.log("Test start");

  const result1 = await delay(1000, "1 second has passed");
  console.log(result1);

  const result2 = await delay(2000, "3 seconds have passed");
  console.log(result2);

  console.log("Test end");
}

runTest();

// Arroy version
const delay = (ms, value) =>
  new Promise(resolve => setTimeout(() => resolve(value), ms));

const runTest = async () => {
  console.log("Test start");

  const result1 = await delay(1000, "1 second has passed");
  console.log(result1);

  const result2 = await delay(2000, "3 seconds have passed");
  console.log(result2);

  console.log("Test end");
};

runTest();
