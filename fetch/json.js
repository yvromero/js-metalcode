(async() => {
   const url = "https://jsonplaceholder.typicode.com/posts";

   const result = await fetch(url, {
      method: "GET"
   });

   const json = await result.json();

   json.forEach(post => {
      console.log(post);
   });
})();

// example
function hi(fn){
   for (let index = 0; index < 10; index++) {
       fn(index)
    
   }
}

hi(number => console.log(number));
hi(console.log);