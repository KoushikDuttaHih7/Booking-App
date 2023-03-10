const express = require("express");
const router = express.Router();

const {
  register,
  logIn,
  getProfile,
  logOut,
} = require("../controllers/userControllers");

// Register User
router.post("/register", register);
// Login User
router.post("/login", logIn);
// Login User Data
router.get("/profile", getProfile);
// Login User Data
router.post("/logout", logOut);

module.exports = router;
