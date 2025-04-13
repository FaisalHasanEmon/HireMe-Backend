const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//Admin Route
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Hello admin" });
});
// Employee Route
router.get("/employee", verifyToken, authorizeRoles("employee"), (req, res) => {
  res.json({ message: "Hello employees" });
});
//job_seeker Route
router.get(
  "/job_seeker",
  verifyToken,
  authorizeRoles("job_seeker"),
  (req, res) => {
    res.json({ message: "Hello Job seekers" });
  }
);

module.exports = router;
