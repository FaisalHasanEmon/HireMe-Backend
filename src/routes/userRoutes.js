const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

//Admin Route
router.get("/admin", verifyToken, (req, res) => {
  res.json({ message: "Hello admin" });
});
// Employee Route
router.get("/employee", verifyToken, (req, res) => {
  res.json({ message: "Hello employees" });
});
//job_seeker Route
router.get("/job_seeker", verifyToken, (req, res) => {
  res.json({ message: "Hello Job seekers" });
});

module.exports = router;
