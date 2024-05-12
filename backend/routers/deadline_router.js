//not sure if it work

const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Get all tasks sorted by upcoming deadlines
router.get("/upcoming", function (req, res) {
    const today = new Date();
    const upcomingLimit = new Date();
    upcomingLimit.setDate(today.getDate() + 7); // adjust as needed

    Task.find({
        deadline: { $lte: upcomingLimit.toISOString(), $gte: today.toISOString() }
    })
    .sort({ deadline: 1 }) // Sort by deadline date ascending
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
});

// Update the deadline of a specific task
router.post("/update/:id", function (req, res) {
    const newDeadline = req.body.newDeadline;
    if (!newDeadline) {
        return res.status(400).send("New deadline is required.");
    }

    Task.updateOne({ _id: req.params.id }, { deadline: newDeadline })
        .then(updateResponse => {
            if (updateResponse.modifiedCount === 0) {
                return res.status(404).send("Task not found.");
            }
            res.send("Deadline updated successfully.");
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

module.exports = router;
