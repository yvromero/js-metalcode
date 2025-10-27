function fetchAndLog(url) {
  fetch(url)
    .then(response => {
      // Check if the response was successful
      if (!response.ok) {
        throw new Error(`Request with an error ${response.status}`);
      }
      // Ensure the response has content
      return response.text();
    })
    .then(text => {
      // Log the response content
      console.log("Answer: ", text || "[No content returned]");
    })
    .catch(error => {
      // Log any errors
      console.error("An error: ", error);
    })
    .finally(() => {
      // Always executed
      console.log("---The request has ended---");
    });
}

// Usage
fetchAndLog("https://google.com");
