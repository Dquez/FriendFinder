const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




//Ternary operator. If process.env.port is undefined, we use 8080. In either case, log result.
app.listen(port, function(){
  process.env.PORT == undefined? console.log("App listening on PORT 8080"):console.log("App listening on PORT" + process.env.PORT);
});


app.post("/api/friends", function(req, res) {
  console.log(req.body);
  res.send({ status: 'SUCCESS' });
  });