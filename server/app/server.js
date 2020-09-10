const express = require("express");
const morgan = require("morgan");
const app = express();

const port = 5000 || process.env.PORT;

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({
    source: "/",
    message: "Request successful",
    date: Date(),
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});
