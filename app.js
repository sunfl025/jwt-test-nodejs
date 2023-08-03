require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
app.use(express.json());

// Logic goes here
app.use("/v1/auth",authRouter);
app.use("/v1/user",userRouter);
module.exports = app;