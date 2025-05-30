const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const dbConnect = require("./src/config/dbConnect");
const authRoutes = require("./src/routes/authRoutes");
const jobRoutes = require("./src/routes/jobRoutes");
const postedJobsRoutes = require("./src/routes/postedJobsRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
// Connect with database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); //Login and Registration Route
app.use("/api/employees", jobRoutes); //Employees Route
app.use("/api/candidates", postedJobsRoutes); //candidates Route
app.use("/api/admin", adminRoutes); //admin Route

app.get("/", (req, res) => {
  res.send("Welcome to HireMe Server");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  // console.log(process.env.CONNECTION_STRING);
});
