const express = require("express");
const router = express.Router();
var userName;
router.get("/", (req, res) => {
  var db = req.app.locals.db;

  // res.render("myCollection", {
  //   style: "myCollection",
  //   });
  res.send("works");
});
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newCollection = {
    user: req.body.user,
    recId: req.body.recipeId
  };
  console.log(newCollection);

  db.collection("myCollection").insert(newCollection, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("collection");
  });
});

module.exports = router;
