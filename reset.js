const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("reset", {
    style: "reset"
  });
});

module.exports = router;
