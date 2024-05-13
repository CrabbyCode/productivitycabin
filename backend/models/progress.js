const mongoose = require("../db");
const progressSchema = mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
