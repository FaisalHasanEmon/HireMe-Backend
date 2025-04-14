const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
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
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    current_status: {
      type: String,
      required: true,
      enum: ["accepting", "not_accepting"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
