const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/:id", function (req, res) {
  console.log(req.params.id);
  Task.findOne({ _id: req.params.id })
    .exec()
    .then(function (task) {
      console.log(task);
    });
});

module.exports = router;
