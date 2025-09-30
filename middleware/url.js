const { getinfo } = require("../service/auth");

const checkauthentication = (req,res,next)=>{
  
    const sessionId = req.cookies.id;
    console.log(sessionId);
    
    if(!sessionId)
    {
       return res.redirect("/login");
    }
    const user = getinfo(sessionId);
    console.log("user info is" , user);
    if(!user)
    {
       return res.redirect("/login");
    }
    req.user = user;
    next();
}

module.exports = checkauthentication;