const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const dbConnect = require("./src/config/dbConnect");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");

// Connect with database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); //Login and Registration Route
app.use("/api/user", userRoutes); //User Route

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  // console.log(process.env.CONNECTION_STRING);
});
