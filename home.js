const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var recipeId;
  var db = req.app.locals.db;

  db.collection("recipes")
    .find()
    .sort({ _id: -1 })
    .limit(4)
    .toArray((err, result) => {
      if (err) return console.log(err);

      console.log(result);
      console.log(recipeId);
      res.render("home", { recipes: result, style: "home" });
    });
});
module.exports = router;
