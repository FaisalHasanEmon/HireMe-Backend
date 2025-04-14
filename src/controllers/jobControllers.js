const Job = require("../models/jobModel");
const User = require("../models/userModel");
const userIdAndEmail = require("../utils/utilities");

//Add Job
const addJob = async (req, res) => {
  try {
    const employeeHeaders =
      req.headers.Authorization || req.headers.authorization;

    const { userId, userEmail } = userIdAndEmail(employeeHeaders);

    // Find the user from db
    const user = await User.findOne({ _id: userId });

    const newJob = new Job({
      employee_name: user.name,
      employee_email: userEmail,
      employee_id: userId,
      ...req.body,
    });

    // Save to database
    await newJob.save();

    res.status(201).json({ message: `New Job Added to Database` });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update Job
const updateJob = async () => {};

// Delete Job
const deleteJob = async () => {};

// Employee Posted Jobs
const employeePostedJobs = async () => {};

module.exports = { addJob, updateJob, deleteJob, employeePostedJobs };
