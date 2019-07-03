const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;

var recipeId;
router.get("/:id", (req, res) => {
  var db = req.app.locals.db;
  var rating;
  recipeId = req.params.id;
  db.collection("userRating")
    .find({ recId: recipeId })
    .toArray((err, result) => {
      if (err) return console.log(err);
      rating = result;
    });
  db.collection("recipes")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, result) => {
      if (err) return console.log(err);

      res.render("viewRecipe", {
        style: "viewRecipe",
        recipe: result,
        rating: rating
      });
    });
});

// POST METHOD
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newReview = {
    title: req.body.title,
    review: req.body.review,
    recId: recipeId
  };

  db.collection("userRating").insert(newReview, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("/recipe/" + recipeId);
  });
});

module.exports = router;
