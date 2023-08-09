const authController = require("../middleware/auth");

const router = require("express").Router();

router.post("/register",authController.register);
router.get("/login",authController.login);

router.post("/welcome", authController.verifyToken, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  
 module.exports = router;