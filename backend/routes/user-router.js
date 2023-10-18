const express = require("express");
const UserCtrl = require("../controllers/user-ctrl"); // Import the user controller

const router = express.Router();

router.post("/user", UserCtrl.createUser);
router.put("/user/:userId", UserCtrl.updateUser);
router.delete("/user/:userId", UserCtrl.deleteUser);
router.get("/user/:userId", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);
router.post("/user/auth", UserCtrl.getUserByEmailAndUsername);

module.exports = router;
