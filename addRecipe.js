const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const express = require("express");
const router = express.Router();
const upload = multer({ dest: "public/assets" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

router.get("/", (req, res) => {
  var db = req.app.locals.db;
  if (req.app.locals.loggedIn === true) {
    res.render("addRecipe", {
      style: "addRecipe"
    });
  } else {
    res.redirect("/");
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    width: 400,
    height: 300
  });
  console.log(result);
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
    },
    image: result.secure_url,
    user: req.app.locals.username
  };

  db.collection("recipes").insert(newRecipe, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("home");
  });
});
module.exports = router;
