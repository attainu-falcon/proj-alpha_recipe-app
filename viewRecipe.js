const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  var id = req.query.id;
  db.collection("recipes")
    .find({ recipeId: "id" })
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
