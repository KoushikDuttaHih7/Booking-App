const asyncHandler = require("express-async-handler");
const imageDownloader = require("image-downloader");

// console.log(__dirname);
const imageUpload = asyncHandler(async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: "/uploads",
  });
  res.json(newName);
});

module.exports = {
  imageUpload,
};
