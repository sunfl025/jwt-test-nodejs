require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");

app.use(express.json());

// Logic goes here

// importing user context
// const User = require("./model/user");
// const authController = require("./middleware/auth");

// app.post("/welcome", authController.verifyToken, (req, res) => {
//     res.status(200).send("Welcome 🙌 ");
//   });

// // Register
// app.post("/register",authController.register);


// app.get("/login",authController.login);
app.use("/v1/auth",authRouter);

module.exports = app;