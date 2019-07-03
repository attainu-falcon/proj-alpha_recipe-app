const express = require("express");
const Rating = require('rating');
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
<<<<<<< HEAD
        
=======
>>>>>>> 35ddea287d415139dd18cb354a610653fca91b14
      });
    });
});

// POST METHOD
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newReview = {
    title: req.body.title,
    review: req.body.review,
<<<<<<< HEAD
    rating: req.body.star,

    recId: recipeId

  };
  console.log(req.body.rating);
  db.collection("userRating").insert(newReview, (err, result) => {
    if (err) throw (err);
=======
    recId: recipeId
  };

  db.collection("userRating").insert(newReview, (err, result) => {
    if (err) throw err;
>>>>>>> 35ddea287d415139dd18cb354a610653fca91b14
    console.log(result);
    res.redirect("/recipe/" + recipeId);
  });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 35ddea287d415139dd18cb354a610653fca91b14
