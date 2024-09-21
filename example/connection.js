const mongoose = require("mongoose");
require('dotenv').config({path:__dirname+'/.env'})
const DOCKER_URL = process.env.DOCKER_URL.trim().replace(/[';]/g, '');
const MONGODB_URI = `mongodb://root:example@${DOCKER_URL}:27017`;

if(MONGODB_URI  ){
  console.log("  -MONGOO>Connecting too : ",MONGODB_URI);
  mongoose.connect(
    MONGODB_URI,
    {
    }
  );
}


module.exports = mongoose.connection;
