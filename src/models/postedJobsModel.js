const mongoose = require("mongoose");

const postedJobsSchema = new mongoose.Schema(
  {
    employee_name: {
      type: String,
      required: true,
    },
    employee_email: {
      type: String,
      required: true,
    },
    employee_id: {
      type: String,
      required: true,
    },
    job_id: {
      type: String,
      required: true,
    },
    candidate_name: {
      type: String,
      required: true,
    },
    candidate_email: {
      type: String,
      required: true,
    },
    candidate_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostedJobs", postedJobsSchema);
