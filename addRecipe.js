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
      measure: req.body.measure,
      item: req.body.item
    }
  };
  if (!newRecipe || !newRecipe) {
    return res.status(400).json({ msg: "cannot post empty form" });
  }
  db.collection("recipes").insert(newRecipe, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("updated");
  });
});
module.exports = router;
