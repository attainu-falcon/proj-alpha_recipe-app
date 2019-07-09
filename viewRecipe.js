const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;

var recipeId;
router.get("/:id", (req, res) => {
  var db = req.app.locals.db;
  if (req.app.locals.loggedIn === true) {
    var rating;
    var exist = {};
    var userName = { username: req.app.locals.username };
    recipeId = req.params.id;
    db.collection("userRating")
      .find({ recId: recipeId })
      .toArray((err, result) => {
        if (err) return console.log(err);
        rating = result;
      });
    db.collection("user")
      .find({
        username: req.app.locals.username,
        myCollection: { $in: [recipeId] }
      })
      .count((err, result) => {
        if (err) {
          return console.log(err);
        }
        console.log("View Result", result);
        if (result != 0) {
          exist.IsExist = true;
        } else {
          exist.IsExist = false;
        }
      });
    db.collection("recipes")
      .find({ _id: ObjectId(req.params.id) })
      .toArray((err, result) => {
        if (err) return console.log(err);
        console.log(exist);
        res.render("viewRecipe", {
          style: "viewRecipe",
          recipe: result[0],
          rating: rating,
          exist: exist.IsExist,
          userName: userName
        });
      });
  } else {
    res.redirect("/");
  }
});

// POST METHOD
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newReview = {
    username: req.body.username,
    review: req.body.review,
    rating: req.body.star,
    recId: recipeId
  };

  db.collection("userRating").insert(newReview, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("/recipe/" + recipeId);
  });
});

module.exports = router;
