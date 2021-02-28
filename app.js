var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
