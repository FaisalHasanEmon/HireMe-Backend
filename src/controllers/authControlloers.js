const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// User Registration
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword, role });

    // Save the new user to Database
    await newUser.save();
    res.status(201).json({ message: `User registered with email ${email}` });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the user
    const user = await User.findOne({ email });
    // if the user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //match the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credentials" });
    }

    // Generated Token
    const token = jwt.sign(
      {
        id: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = {
  register,
  login,
};
