var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/create', async function(req, res) {
//   const createduser = await userModel.create({
//     username: "priyaan307",
//     name: "Priyadarshani",
//     age: 21
//   });
//   res.send("created");
// });


module.exports = router;
