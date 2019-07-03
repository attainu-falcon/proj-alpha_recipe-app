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
<<<<<<< HEAD
      res.render("home", {
      recipes: result
       });
=======
      console.log(recipeId);
      res.render("home", { recipes: result, style: "home" });
>>>>>>> 35ddea287d415139dd18cb354a610653fca91b14
    });
});
module.exports = router;
