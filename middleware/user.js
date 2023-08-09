const User = require("../model/user");

const userController = {

   getAllUser:async(req,res) => {
        try {
            const list = await User.find();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
   },
   deleteUser:async(req,res) => {
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            res.status(200).json("delete successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
   }
}
module.exports = userController;

