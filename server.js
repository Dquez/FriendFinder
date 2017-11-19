const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
// here we include all our dependencies for the app

// uses bodyParser middleware to render our incoming data as JSON for the server to understand and work with correctly
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// when using the below routes, we pass our instantiated express app to be able to handle the route requests by the user
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