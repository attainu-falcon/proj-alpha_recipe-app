const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const MongoClient = require("mongodb").MongoClient;

var objectId = require("mongodb").ObjectID;
var db;
<<<<<<< HEAD
var url = "mongodb+srv://nikku:nikku1234@cluster0-rbeul.mongodb.net/test?retryWrites=true&w=majority";
=======
var url =
  process.env.MY_DB ||
  "mongodb+srv://nikku:nikku1234@cluster0-rbeul.mongodb.net/test?retryWrites=true&w=majority";
console.log(url);
>>>>>>> 35ddea287d415139dd18cb354a610653fca91b14
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  app.locals.db = client.db("Deliciously");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`sever running on ${PORT}`);
  });
});
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/home", require("./home"));
app.use("/add", require("./addRecipe"));
app.use("/", require("./landing"));
app.use("/signup", require("./signUp"));
app.use("/login", require("./login"));
app.use("/reset", require("./reset"));

app.use("/recipe", require("./viewRecipe"));
app.use("/recipes", require("./allRecipes"));
app.use("/collection", require("./myCollection"));
