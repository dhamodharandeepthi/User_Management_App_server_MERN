const userModel = require("../models/user");

class UserController {
  static getAllUsers = async (req, res) => {
    try {
      const allUsers = await userModel.find({});
      if (allUsers) {
        return res.status(200).json(allUsers);
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static createUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
      if (name && email && age) {
        const newUser = new userModel({
          name,
          email,
          age,
        });

        const savedUser = await newUser.save();
        if (savedUser) {
          return res.status(201).json(savedUser);
        } else {
          return res.status(400).json({ message: "something wrong" });
        }
      } else {
        return res.status(400).json({ message: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const singleUserData = await userModel.findById(id);
        return res.status(200).json(singleUserData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const updatedUserData = await userModel.findByIdAndUpdate(
          id,
          req.body,
          { new: true }
        );
        return res.status(200).json(updatedUserData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const deletedUserData = await userModel.findByIdAndDelete(id);
        return res.status(200).json(deletedUserData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };
}

module.exports = UserController;
