var express = require("express");

var app = express();

app.use((req, res, next) => {
  res.end("hello from express!");
});

module.exports = app;
