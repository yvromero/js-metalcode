(async () => {
  try {
    const response = await fetch("https://gsoogle.com");

    if(!response.ok){
       throw new Error(`Request with an error ${response.status}`);
    }
    const text = await response.text();
    console.log("Answer: ", text);

  } catch (error) {
     console.error("An Error: ", error);
  }finally{
     console.log("---The request has ended---");
  }
})();