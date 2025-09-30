const mongoose = require("mongoose");

const UrlSchema = mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    redirectUrl : {
        type : String,
        required : true,      
    },
    visit : [{
        timestamp : {
            type : Number
        }
    }],
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
},{timestamps : true})

const URL = mongoose.model("url" , UrlSchema);

 module.exports  = URL;