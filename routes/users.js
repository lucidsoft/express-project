var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("user", { username: "lucidsoft" });
});

router.get("/:userid/profile", (req, res, next) => {
  res.end("/users/profile requested");
});

router.get("/:userid", (req, res, next) => {
  res.render("user", { username: req.params["userid"] });
});

module.exports = router;
