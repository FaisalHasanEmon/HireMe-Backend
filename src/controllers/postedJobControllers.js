const Job = require("../models/jobModel");
const User = require("../models/userModel");
const PostedJobs = require("../models/postedJobsModel");
const userIdAndEmail = require("../utils/utilities");

const postedJobs = async (req, res) => {
  try {
    const { jobId } = req.body;
    if (!jobId) {
      res.status(400).json({
        message: "Invalid application",
      });
    } else {
      isJobAvailable = await Job.findOne({ _id: jobId });

      if (!isJobAvailable) {
        res.status(404).json({ message: "Job Not Found" });
      }
      //   Applicant requested token
      const employeeHeaders =
        req.headers.Authorization || req.headers.authorization;

      //It will extract applicant user_id and email from token
      const { userId: applicant_id, userEmail: applicantEmail } =
        userIdAndEmail(employeeHeaders);

      const isApplicantValid = await User.findOne({ _id: applicant_id });
      if (!isApplicantValid) {
        res.status(404).json({ message: "Job Not Found" });
      }
      const newApplication = new PostedJobs({
        employee_name: isJobAvailable.employee_name,
        employee_email: isJobAvailable.employee_email,
        employee_id: isJobAvailable.employee_id,
        job_id: jobId,
        candidate_name: isApplicantValid.name,
        candidate_email: isApplicantValid.email,
        candidate_id: isApplicantValid._id,
      });

      await newApplication.save();
      res.status(201).json({ message: "Application Successfully Submitted" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { postedJobs };
