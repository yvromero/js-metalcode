 function hi(name) {
  if (!name) {
    throw new Error("Name is required");
  }

  return `Nihao ${name}`;
}

(async () => {
  const message = await hi("world");
  console.log(message);
})();

console.log("Doing something more");
