const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("addRecipe", {
    style: "addRecipe"
  });
});
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newRecipe = {
    title: req.body.title,
    description: req.body.description,
    serving: req.body.serving,
    totaltime: req.body.totaltime,
    cookingtime: req.body.cookingtime,
    preptime: req.body.preptime,
    instructionsteps: req.body.instructionsteps,
    cuisine: req.body.cuisine,
    difficulty: req.body.difficulty,
    recipetype: req.body.recipetype,
    ingredients: {
      quantity: req.body.quantity,
      item: req.body.item
    }
  };

  db.collection("recipes").insert(newRecipe, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("home");
  });
});
module.exports = router;
