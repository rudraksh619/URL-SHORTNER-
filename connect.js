const mongoose = require("mongoose")

async function handleMongoconnection(url) {

   await mongoose.connect(url);

}

module.exports = handleMongoconnection;