(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/aas5";

  try {
    const response = await fetch(url, { method: "DELETE" });

    console.log("HTTP Status:", response.status);

    if (response.ok) {
      console.log("✅ Deleted successfully!");
    } else {
      console.log(`❌ Failed to delete. Status: ${response.status} (${response.statusText})`);
    }

    // Try to parse JSON only if the server returns content
    const data = await response.json().catch(() => null);
    console.log("Response body:", data);

  } catch (error) {
    console.error("🚨 Network or fetch error:", error.message);
  }
})();