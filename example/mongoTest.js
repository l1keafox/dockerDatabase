const db = require("./connection");

db.once("open", () => {
  console.log("MongoDB open here!")
});