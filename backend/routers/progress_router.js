const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const Progress = require("../models/progress");

router.post("/:id", function (req, res) {
  Progress.insertMany([
    {
      member: req.body.userId,
      task: req.params.id,
      project: req.body.project,
    },
  ]);
});

router.delete("/:id", function (req, res) {
  console.log("reached progress delete");
  Progress.deleteOne({ task: req.params.id }).then(function (deletd) {});
});

module.exports = router;
