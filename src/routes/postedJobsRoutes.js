const express = require("express");
const router = express.Router();
const { postedJobs } = require("../controllers/postedJobControllers");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.post("/applyJob", verifyToken, authorizeRoles("job_seeker"), postedJobs);

module.exports = router;
