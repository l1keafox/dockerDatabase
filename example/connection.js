const mongoose = require("mongoose");

var MONGODB_URI = "mongodb://root:example@raspberrypi.local:27017"

if(MONGODB_URI  ){
  console.log("  -MONGOO>Connecting too : ",MONGODB_URI);
  mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}


module.exports = mongoose.connection;