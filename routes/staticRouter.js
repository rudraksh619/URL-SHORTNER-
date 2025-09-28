const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/" , async(req, res)=>{
    const data = await URL.find({});
    res.render("home",{allurls : data});
})


module.exports = router ;