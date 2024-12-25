const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors"); // Import CORS
const path = require('path');

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5001;


// Middleware to allow cross-origin requests
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from the frontend (React app)
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/quiz", require("./routes/quiz"));

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
