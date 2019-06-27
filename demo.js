var express = require("express");
var app = express();

app.use(express.static('public'));


const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`sever running on ${PORT}`);
});