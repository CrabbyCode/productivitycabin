const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const path = require("path");
const Project = require("../models/project");

router.get("/delete/:id", function (req, res) {
  Task.deleteOne({ _id: req.params.id }).then(function (task) {
    console.log(task);
  });
});

router.get("/update/:id", function (req, res) {
  Task.updateOne({ _id: req.params.id }, { type: req.query.newType }).then(
    function (task) {}
  );
});

router.get("/task/edit/:id", function (req, res) {
  Task.find({ _id: req.params.id })
    .exec()
    .then(function (resultArr) {
      res.json(resultArr[0]);
    });
});

router.put("/task/edit/:id", function (req, res) {
  Task.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      details: req.body.details,
      urgent: req.body.urgent == "on" ? true : false,
      deadline: new Date(req.body.deadline),
    }
  ).then(function (task) {
    res.sendStatus(200);
  });
});

router.post("/task/edit/:id", function (req, res) {
  Task.insertMany([
    {
      name: req.body.name,
      details: req.body.details,
      urgent: req.body.urgent == "on" ? true : false,
      deadline: new Date(req.body.deadline),
      project: req.body.project,
      type: req.body.type,
    },
  ]).then(function (task) {
    res.sendStatus(200);
  });
});

module.exports = router;
