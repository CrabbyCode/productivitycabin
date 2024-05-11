const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/delete/:id", function (req, res) {
  console.log(req.params.id);
  Task.deleteOne({ _id: req.params.id }).then(function (task) {
    console.log(task);
  });
});

router.get("/update/:id", function (req, res) {
  console.log("reached update path");
  Task.updateOne({ _id: req.params.id }, { type: req.query.newType }).then(
    function (task) {
      console.log(task);
    }
  );
});

module.exports = router;
