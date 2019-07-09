const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
var recipeId;

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  if (req.app.locals.loggedIn === true) {
    db.collection("user")
      .find({ username: req.app.locals.username })
      .toArray((err, result) => {
        if (err) {
          return res.send();
        }

        var col;
        var array = [];
        result[0].myCollection.forEach(function(stringId) {
          array.push(ObjectId(stringId));
        });
        console.log(array);
        db.collection("recipes")
          .find({ _id: { $in: array } })
          .toArray(function(err, resu) {
            if (("Error =>", err)) {
            }
            console.log(resu);
            res.render("myCollection", {
              collection: resu,
              style: "myCollection"
            });
          });
      });
  } else {
    res.redirect("/");
  }
});
router.post("/add", (req, res) => {
  var db = req.app.locals.db;
  recipeId = req.body.recipeId;
  db.collection("user").updateOne(
    { username: req.app.locals.username },
    { $push: { myCollection: recipeId } },
    function(error, result) {
      if (error) {
        console.log(error);
      }
      console.log("Sucess");
      res.redirect("/collection");
    }
  );
});
module.exports = router;
