const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("viewRecipe", {
    style: "viewRecipe"
  });
});
module.exports = router;
