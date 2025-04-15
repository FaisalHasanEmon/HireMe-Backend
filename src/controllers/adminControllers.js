const Job = require("../models/jobModel");
const User = require("../models/userModel");
const userIdAndEmail = require("../utils/utilities");

// View All Users
const viewAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.send(allUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// View All Jobs
const viewAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.send(allJobs);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { viewAllUsers, viewAllJobs };
