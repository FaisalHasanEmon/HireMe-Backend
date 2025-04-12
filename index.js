const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const dbConnect = require("./src/config/dbConnect");

dbConnect();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send({ name: "Bangladesh", new: process.env.hello });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  // console.log(process.env.CONNECTION_STRING);
});
