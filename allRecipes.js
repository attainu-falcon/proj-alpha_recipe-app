const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  if (req.app.locals.loggedIn === true) {
    var recipeId;

    db.collection("recipes")
      .find()
      .sort({ _id: -1 })
      .toArray((err, result) => {
        if (err) return console.log(err);
        console.log(result);
        console.log(recipeId);
        res.render("allRecipes", { recipes: result, style: "allRecipes" });
      });
  } else {
    res.redirect("/");
  }
});
module.exports = router;
