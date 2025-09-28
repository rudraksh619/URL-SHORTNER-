const express = require("express");
const {handleCreteShortId, get_redirect_url} = require("../controllers/url");

const router  = express.Router();

router.post("/" , handleCreteShortId);
router.get("/redirectURL" , get_redirect_url)

router.get("/test" , (req,res)=>{
    console.log("hey are you yrher")
    res.status(200).render("home");
})

module.exports = router;