const express = require("express");
const URL = require("../models/url");
const { getinfo } = require("../service/auth");

const router = express.Router();

router.get("/" , async(req, res)=>{

    const sessionID = req.cookies.id;
    console.log("session id is" , sessionID);

    const user = getinfo(sessionID);

    if(!user)
    {
        return res.redirect("/login");
    }

    console.log("user info is " , user);
    
    let data = [];
    if(user)
    {
         data = await URL.find({ userId : user._id });
    }
    res.render("home",{allurls : data});
})

router.get("/signUp" , (req,res)=>
{
    res.render("signup");
})

router.get("/login" , (req,res)=>{
    res.render("login");
})


module.exports = router ;