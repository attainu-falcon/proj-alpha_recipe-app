var express = require("express");
var app = express();

app.use("/", require("./home"));
app.use("/add", require("./addRecipe"));
app.use("/login", require("./login"));
app.use("/recipes", require("./viewRecipe"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`sever running on ${PORT}`);
});
