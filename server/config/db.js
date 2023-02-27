const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MONGODB CONNECTED AT :-> ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
