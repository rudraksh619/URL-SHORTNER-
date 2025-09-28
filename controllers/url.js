const URL = require("../models/url");
const { nanoid } = require("nanoid");


async function handleCreteShortId(req, res) {
  
  const body = req.body;

  console.log("bodt data is" , req.body);
  
  if(!body){
    res.status(200).send("yeh i am here");
  }
  const id = nanoid(8);

  console.log("short id is ", id);

  try {
    await URL.create({
      shortId: id,
      redirectUrl: body.url,
      visit: [],
    });
    return res.status(200).render("home" , {short_id : id})
    return res.status(200).json({ short_id : id});
  } catch (error) {
    res.status(400).send("someting went wrong plx try again");
  }
}

async function get_redirect_url(req,res)
{
   const  short_id  = req.body.short_id;
    try {
        const redirect_URL = await URL.findOne({shortId :  short_id});
        console.log("redirect url is" , redirect_URL);
        if(!redirect_URL){
           return  res.status(400).send("id not found");
        }
        return res.status(200).json(redirect_URL.redirectUrl)
    } catch (error) {
        return res.status(500).send("something went wrong");
    }
    
}
module.exports = {handleCreteShortId , get_redirect_url};
