const mongoose = require("../db");
const progressSchema = mongoose.Schema({
  member: { type: Schema.Types.ObjectId, ref: "User" },
  task: { type: Schema.Types.ObjectId, ref: "Task" },
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
