const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
var recipeId;
router.get("/", (req, res) => {
  var db = req.app.locals.db;
  db.collection("myCollection")
    .find({ user: req.app.locals.username })
    .toArray((err, result) => {
      if (err) return console.log(err);
      console.log(result);
      console.log(recipeId);
      res.render("myCollection", { collection: result, style: "myCollection" });
    });
});

router.post("/", (req, res) => {
  var db = req.app.locals.db;
  recipeId = req.body.recipeId;
  db.collection("user").updateOne(
    { user: req.app.locals.username },
    { myCollection: { $push: { recipeId: req.body.recipeId } } },
    newCollection,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.redirect("collection");
    }
  );
});
module.exports = router;
