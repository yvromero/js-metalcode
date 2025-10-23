async function hi(name) {
  if (!name) {
    throw new Error("Name is required");
  }

  return `Hi ${name}`;
}

// Example with missing argument
hi()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });

// Example with a valid argument
hi("Bryan")
  .then((result) => console.log(result))
  .catch((error) => console.error("An error occurred:", error.message));
