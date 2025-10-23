function task(){
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve("Task completed")
      }, 2000);
   });
}

async function executeTask(){
   console.log("Initializing task...");
   const result = await task();
   return result;
};

(async () => {
  const res = await executeTask();
  console.log(res);
  console.log("Async function done");
})();

console.log("Doing something more...");