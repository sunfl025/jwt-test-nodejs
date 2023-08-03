const authController = require("../middleware/auth");
const userController = require("../middleware/user");

const router = require("express").Router();
router.get("/users",authController.verifyToken,userController.getAllUser);
module.exports=router;