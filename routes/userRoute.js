const express = require("express");
const {handleSignUp, handleLogin} = require("../controllers/userController");

const User_router = express();

User_router.post("/",handleSignUp)

User_router.post("/login" , handleLogin )

module.exports = User_router;
