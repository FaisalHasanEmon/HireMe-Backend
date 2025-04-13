const Job = require("../models/jobModel");
//Add Job
const addJob = async (req, res) => {
  try {
    const newJob = new Job({ ...req.body });
    await newJob.save();
    res.status(201).json({ message: `New Job Added to Database` });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

// Update Job
const updateJob = async () => {};

// Delete Job
const deleteJob = async () => {};

// Employee Posted Jobs
const employeePostedJobs = async () => {};

module.exports = { addJob, updateJob, deleteJob, employeePostedJobs };
