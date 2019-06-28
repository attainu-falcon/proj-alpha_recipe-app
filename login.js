const express = require("express");
const router = express.Router();
router.use(
  session({
    secret: "express session secret"
  })
);
router.get("/", (req, res) => {
  res.render("login", {
    style: "login"
  });
});
app.post("/", (req, res) => {
  var db = req.app.locals.db;

  for (var i = 0; i < db.length; i++) {
    if (
      req.body.email === db[i].email &&
      req.body.password === db[i].password
    ) {
      req.session.login = true;
      req.session.studentName = db[i].name;
    }
  }
  res.render("home");
});

module.exports = router;
