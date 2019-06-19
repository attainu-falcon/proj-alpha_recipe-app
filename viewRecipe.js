const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("View Recipe Works");
});
module.exports = router;
