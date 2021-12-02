const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/yearend-kafe");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "fail connect to db"));
db.on("open", () => {
  console.log("connect to db");
});
