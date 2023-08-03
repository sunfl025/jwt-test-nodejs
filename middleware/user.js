const User = require("../model/user");

const userController = {

   getAllUser:async(req,res) => {
        try {
            const list = await User.find();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
   }
}
module.exports = userController;

