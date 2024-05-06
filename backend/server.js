const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

mongoose.connect("mongodb://localhost/test");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  urgent: { type: Boolean, required: true },
  type: { type: String, required: true },
  deadline: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  if (req.query.getTasks) {
    Task.find()
      .exec()
      .then(function (tasks) {
        res.send(tasks[0].name);
      });
  } else {
    res.sendFile(path.join(__dirname, "public", "overview.html"));
  }
});

app.listen(3000, function () {
  console.log("listening on port 3000..");
  /* var task1 = new Task({
    name: "Swe363 hw3",
    details: "add javascript to already built thing",
    urgent: true,
    type: "toDo",
    deadline: "20/4/2024",
  });
  task1.save().then(function (task) {
    console.log(task._id);
  }); */
});
