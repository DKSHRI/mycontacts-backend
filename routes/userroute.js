const express = require("express");
const router = express.Router();
const usercontroller=require("../controller/usercontroller");
const validateTokenHandler = require("../middleware/validateTokenHandler");
const { registerUser, loginUser, currentUser } = usercontroller;

// ✅ Define routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateTokenHandler, currentUser);

// ✅ Correct export
module.exports = router;
