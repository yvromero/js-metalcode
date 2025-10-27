(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const post = {
     userId: 1,
     title: "Js Course",
     body: "Learn how works Js on server"
  };

  const result = await fetch(url,{
      method: "POST",
      headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
  });

  console.log(result);
  const json = await result.json();

  console.log(json);

})();