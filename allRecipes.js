const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  db.collection("recipes")
    .find()
    .sort({ recipeId: -1 })
    .toArray((err, result) => {
      if (err) return console.log(err);

      console.log(result);
      res.render("allRecipes", { recipes: result, style: "allRecipes" });
    });
});
module.exports = router;
