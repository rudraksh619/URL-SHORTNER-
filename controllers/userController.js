const User = require("../models/user");

const {v4:uuidv4} = require("uuid");
const { setinfo } = require("../service/auth");

const handleSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await User.create({
      username: username,
      email: email,
      password: password,
    });
    res.render("home");
  } catch (error) {
    res.status(400).send("Something stuck with an eroror ");
  }
};

const handleLogin = async (req,res)=>{
    console.log("hey");
const {email , password} = req.body;

const data = await User.findOne({email,password});

console.log("user logined data "  , data);

if(!data){
    res.render("login");
}
else{
    const id = uuidv4();
    setinfo(id , data);
    res.cookie("id" , id);
    res.redirect("/")
}

}

module.exports = {handleSignUp,handleLogin};