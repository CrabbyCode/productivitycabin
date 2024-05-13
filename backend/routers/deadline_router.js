const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/:projectId", function (req, res) {
  Task.find({ project: req.params.projectId })
    .exec()
    .then(function (result) {
      res.json(result);
    });
});

module.exports = router;
