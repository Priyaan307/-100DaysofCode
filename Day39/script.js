const express = require('express')
const app = express()

app.set("view engine", "ejs");// static files setup
app.use(express.static("./public"))//public folder

app.get('/', function (req, res) {
  res.render('index'); // render in-place of send
})

app.listen(3000);