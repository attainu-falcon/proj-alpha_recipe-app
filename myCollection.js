const express = require("express");
const router = express.Router();

var recipeId;


router.get("/", (req, res) => {
  
  var db = req.app.locals.db;
 db.collection("myCollection")
    .find({user:"Neyanta"})
      .toArray((err, result) => {
      if (err) return console.log(err);

      console.log(result);
      console.log(recipeId);
      res.render("myCollection", 
      { collection: result, style: "myCollection" });
    });
});

router.post("/", (req, res) => {
  var db = req.app.locals.db;
  const newCollection = {
    user: req.body.user,
    recId: req.body.recipeId,
    title: req.body.title
  };
  recipeId = req.body.recipeId;
  console.log(newCollection);

  db.collection("myCollection").insert(newCollection, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("collection");
  });
});
   router.delete('/:id',function(req,res){
  var db = req.app.locals.db;
  db.collection('myCollection').deleteOne({recId: recipeId},function(err,result){
    res.redirect("collection");
  });
});
module.exports = router;
