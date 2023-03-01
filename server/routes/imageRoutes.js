const express = require("express");
const { imageUpload } = require("../controllers/imageControllers");
const router = express.Router();

router.post("/upload-by-link", imageUpload);

module.exports = router;
