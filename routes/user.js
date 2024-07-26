const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

// All routes

router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.get("/users/single/:id", userController.getSingleUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
