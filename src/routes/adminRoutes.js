const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();
const {
  viewAllUsers,
  viewAllJobs,
} = require("../controllers/adminControllers");

router.get("/allUsers", verifyToken, authorizeRoles("admin"), viewAllUsers);
router.get("/allJobs", verifyToken, authorizeRoles("admin"), viewAllJobs);

module.exports = router;
