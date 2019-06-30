const express = require("express");
const router = express.Router();
var objectId = require("mongodb").ObjectID;
router.get("/:id", (req, res) => {
  var db = req.app.locals.db;
  var id = req.params.id;
  var recipes;
  db.collection("recipes")
    .find({ recipeId: id })
    .toArray((err, result) => {
      if (err) return console.log(err);
       recipes=result;
     
    });
      db.collection("userRating")
    .find({ recipeId: id })
    .toArray((err, result) => {
      if (err) return console.log(err);
      // var data=result;
      
     
      res.render("viewRecipe",{
        style: "viewRecipe",
        data:result,
        recipes:recipes
      });
   
});
});

// POST METHOD
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newReview = {
    title: req.body.title,
    rating: req.body.rating
  };
  if (newReview || !newReview) {
    return res.status(400).json({ msg: "cannot post empty form" });
  };
  db.collection("userRating").insert(newReview, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render("recipe");
  });
});

module.exports = router;
