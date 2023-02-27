const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// User Registration
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ message: "User Signed in", user });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// User Login
const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ message: "User Logged In", user });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

module.exports = {
  register,
  logIn,
};
