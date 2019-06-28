const express = require("express");
const router = express.Router();
var bodyParser= require('body-parser');

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  db.collection("userrating")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);

      console.log(result);
      res.render("viewRecipe", {style: "viewRecipe",
      recipes: result
});
    });
});

router.post("/", (req, res) => {
  var db = req.app.locals.db;
 const newReviews={ review: req.body.review}
   
 
  db.collection("userrating").insert(newReviews, (err, result) => {
    if (err) throw err;
    console.log(result);
    newReviews.push(req.body);
    res.redirect("/");
  });
});

module.exports = router;
