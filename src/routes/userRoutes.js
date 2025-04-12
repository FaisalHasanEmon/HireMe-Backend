const express = require("express");
const router = express.Router();

//Admin Route
router.get("/admin", (req, res) => {
  res.json({ message: "Hello admin" });
});
// Employee Route
router.get("/employee", (req, res) => {
  res.json({ message: "Hello employees" });
});
//job_seeker Route
router.get("/job_seeker", (req, res) => {
  res.json({ message: "Hello Job seekers" });
});

module.exports = router;
