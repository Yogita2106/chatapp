const express = require("express");
// 1. Yahan getUsers ko add karo
const { register, login, getUsers } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// 2. Ye naya route add karo jo frontend mang raha hai
router.get("/users", getUsers); 

module.exports = router;