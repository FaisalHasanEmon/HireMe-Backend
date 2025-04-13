const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company_name: {
    type: String,
    require: true,
  },
  employee_name: {
    type: String,
    require: true,
  },
  employee_email: {
    type: String,
    require: true,
  },
  employee_id: {
    type: String,
    require: true,
    unique: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  salary: {
    min: { type: Number, require: true },
    max: { type: Number, require: true },
    require: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);
