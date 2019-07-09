const express = require("express");
const router = express.Router();
var md5 = require("md5");
router.get("/", (req, res) => {
  res.render("signUp", {
    style: "signUp"
  });
});
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newUser = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: md5(req.body.password),
    myCollection: []
  };
  db.collection("user").insert(newUser, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("login");
  });
});

module.exports = router;
