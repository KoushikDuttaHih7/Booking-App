const express = require("express");
const router = express.Router();

const { register, logIn } = require("../controllers/userControllers");

// Register User
router.post("/register", register);
// Login User
router.post("/login", logIn);

module.exports = router;
