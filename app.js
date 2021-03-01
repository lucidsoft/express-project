var express = require("express");
var path = require("path");
var users = require("./routes/users");

var app = express();

app.set("views", path.join(__dirname, "views")); // tells express where to find the views
app.set("view engine", "pug"); //tells express to use pug as the template engine

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.end("root requested");
});

//mount your router as middleware on the appropriate path
app.use("/users", users);

app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
