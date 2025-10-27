(async() => {
  const url = "https://jsonplaceholder.typicode.com/posts/5";

  const post = {
     id: 5,
     title: "Node Course",
     body: "Learn how works NodeJs",
     userId: 2
  };

  const result = await fetch(url, {
     method: 'PUT',
     headers: {
      'Content-Type': 'application/json'
     },
     body: JSON.stringify(post)
  });

  console.log(result.status)

  const json = await result.json();
  console.log(json);
})();