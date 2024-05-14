const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const User = require("../models/user");

router.get("/checkUser", function (req, res) {
  User.findOne({ username: req.query.username }).then(function (result) {
    if (result == null) {
      res.status(404).json({ no: "no" });
    } else {
      res.status(200).json({ userId: result._id });
    }
  });
});

router.post("/addNew", function (req, res) {
  Project.insertMany([
    {
      title: req.body.title,
      members: req.body.members,
    },
  ]).then(function (result) {});
});

module.exports = router;
