const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("landing", {
    style: "landing"
  });
});

module.exports = router;
