const express = require("express");
// Note: Agar 'auth' middleware issues de raha hai toh testing ke liye temporarily hata sakte ho
const auth = require("../middleware/authMiddleware"); 
const { getMessages } = require("../controllers/messageController");

const router = express.Router();

// Isey badal kar sirf "/" kar do kyunki data ab query params (?sender=...) mein hai
router.get("/", getMessages); 

module.exports = router;