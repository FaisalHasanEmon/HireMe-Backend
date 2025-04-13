const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const {
  addJob,
  updateJob,
  deleteJob,
  employeePostedJobs,
} = require("../controllers/jobControllers");

const router = express.Router();
//Add job route
router.post("/addJob", verifyToken, authorizeRoles("employee"), addJob);

module.exports = router;
