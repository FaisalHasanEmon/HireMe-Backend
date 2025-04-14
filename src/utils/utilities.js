const jwt = require("jsonwebtoken");

// This function will take the token from headers to decode requested user's email, id and role
const userIdAndEmail = (employeeHeaders) => {
  const token = employeeHeaders.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decode.id;
  const userEmail = decode.email;
  const userRole = decode.role;
  return { userId, userEmail, userRole };
};

module.exports = userIdAndEmail;
