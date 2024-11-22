const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// Routes
app.post("/api/message", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message field is required!" });
  }

  console.log(`Received message: ${message}`);

  // Send a response back
  res.json({
    success: true,
    message: `Server received: "${message}"`,
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
