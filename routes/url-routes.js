const express = require("express");
const {handleCreteShortId, get_redirect_url} = require("../controllers/url");

const router  = express.Router();

router.post("/" , handleCreteShortId);
router.get("/redirectURL" , get_redirect_url)

module.exports = router;