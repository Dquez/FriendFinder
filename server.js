const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
// const apiRoutes = require("./app/routing/apiRoutes.js");
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//serve up assets folder and all content as static files from server to client.
// app.use(express.static(path.join(__dirname,'assets')));
// app.get("/", function (req, res) {
//   res.send("Hello world");
// })

//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
  extended: false
}));


//Ternary operator. If process.env.port is undefined, we use 8080. In either case, log result.
app.listen(process.env.PORT || 8080,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 8080!!"):console.log("App listening on PORT" + process.env.PORT);
});