const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");

connectDB();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const PORT = process.env.PORT || 5001;

// app.get("/test", (req, res) => {
//   res.json("Hello World!");
// });

app.use("/api/user", userRoutes);
app.use("/api/image", imageRoutes);

app.use("/api/image/uploads", express.static(__dirname + "/uploads"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}!`);
});
