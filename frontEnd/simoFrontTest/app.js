document.getElementById("sendRequest").addEventListener("click", () => {
  const inputField = document.getElementById("inputField");
  const responseBox = document.getElementById("responseBox");

  // Clear previous response
  responseBox.style.display = "none";
  responseBox.textContent = "";

  // Get user input
  const userInput = inputField.value;

  if (!userInput.trim()) {
    alert("Please enter a message.");
    return;
  }

  // Simulate sending a request
  fetch("http://localhost:3000/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userInput }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Show response
      responseBox.style.display = "block";
      responseBox.textContent = `Server Response: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      responseBox.style.display = "block";
      responseBox.textContent = `Error: ${error.message}`;
    });
});
