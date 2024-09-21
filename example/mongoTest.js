const db = require("./connection");

db.once("open", () => {
  console.log("here?")
});