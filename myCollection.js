const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("myCollection", {
    style: "myCollection"
  });
});

module.exports = router;
