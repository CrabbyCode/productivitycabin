const mongoose = require("../db");
const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
