// install mongoosejs // npm i mongoose
// require and setup connection
// make schema
// create model and export

const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.01:27017/myDatabase");

// Schema

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

module.exports = mongoose.model("user", userschema);