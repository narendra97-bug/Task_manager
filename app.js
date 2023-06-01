const express = require("express");
const dotenv = require("dotenv");
const taskRouter = require("./routes/task.js");
const userRouter = require("./routes/user.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config({ path: "./config.env" });
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
module.exports = app;
