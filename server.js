var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 8080;

var app = express();
var router = express.Router();
require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

// handlebars
var hbs = require('hbs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(router);


var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log("We are connected!");
  }
});

app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
