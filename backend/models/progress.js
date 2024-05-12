const mongoose = require("../db");
const progressSchema = mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
