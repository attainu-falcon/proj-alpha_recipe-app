const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  db.collection("recipes")
    .findOne({ recipeId: "01" })
    .toArray((err, result) => {
      if (err) return console.log(err);

      console.log(result);
      res.render("viewRecipe", {
        style: "viewRecipe",
        recipes: result
      });
    });
});
module.exports = router;
