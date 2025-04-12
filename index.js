const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const dbConnect = require("./src/config/dbConnect");
const authRoutes = require("./src/routes/authRoutes");

dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  // console.log(process.env.CONNECTION_STRING);
});
