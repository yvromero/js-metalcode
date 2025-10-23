/* Js uses the event loop with callbacks, promises, and async/awai for async operations
*/
// Example: Using a Callback
function fetchData(onFinish) {
   setTimeout(() => {
      onFinish("Data cb fetched successfully");
   }, 2000);
}

fetchData((data) => {
   console.log(data);
});


function fetchUsersFromServer(onUsersReceived){
   setTimeout(() => {
      const userList = [
         {id: 1, name: "Alice"},
         {id: 2, name: "Bryan"}
      ];
      onUsersReceived(userList); // passes the data to the callback
   }, 2000);
}

// Call
fetchUsersFromServer((dataUsers) => {
   console.log("Users received:", dataUsers);
})


// Example: Using a Promise
function fetchDataPromise() {
   return new Promise((resolve) => {
    setTimeout(() => {
       resolve("Data promise fetched successfully")
    }, 2000);
   });
}

fetchDataPromise().then((data) => {
   console.log("Data received:", data);
});

// Example: Using a async/await
function fetchDataAsyncAwait() {
   return new Promise((resolve) => {
    setTimeout(() => {
       resolve("Data as/aw received succesfully")
    }, 2000);
   });
}

async function getData() {
   const data = await fetchDataAsyncAwait();
   console.log(data);
}

getData();