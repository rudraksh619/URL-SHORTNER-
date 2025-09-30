const express = require("express");
const router = require("./routes/url-routes");
const handleMongoconnection = require("./connect");

const static_router  = require("./routes/staticRouter") 
const cookieParser = require("cookie-parser")
const URL = require("./models/url");
const path = require("path");
const User_router = require("./routes/userRoute");
const checkauthentication = require("./middleware/url");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
const port = 8000;

const monngourl = "mongodb://localhost:27017/short-url"
handleMongoconnection(monngourl)
.then(()=> console.log("monogodb is connnected"));

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))


app.use("/url" , checkauthentication , router)
app.use("/" , static_router)
app.use("/user", User_router);


app.use("/analytics/:shortid" , async (req,res)=>{
    const id = req.params.shortid;
    console.log(id);
  try {
   const data = await URL.findOne({shortId:id});
   console.log(data);
   if(!data){
    res.status(400).send("datat is not present fonr that id")
   }
   else{
    return res.status(200).json({
        clicks : data.visit.length
    });
   }
  } catch (error) {
    res.status(500).send("INTERNAL SERVER PROBLEM");
  }
    
})

app.use("/:shortid" , async (req,res)=>{
    const id = req.params.shortid;
   const data = await URL.findOneAndUpdate({shortId : id},{
    $push : {
        visit : {
            timestamp : Date.now()
        }
    }
   },{new:true})
   res.status(200).redirect(data.redirectUrl);
})


app.listen(port , ()=> console.log("os open the port and start listinging at" , port));