const express = require("express");
const Task = require("./models/task");
const app = express();
const path = require("path");
const User = require("./models/user");
const Project = require("./models/project");

// Require the router
const deadlineRouter = require("./routers/deadline_router"); //not sure

app.use(express.static(path.join(__dirname, "public")));

// Use the deadline router
app.use("/deadlines", deadlineRouter); //not sure
app.use("/overview", require("./routers/overview_router"));
app.get("/overview", function (req, res) {
  if (req.query.getTasks) {
    Task.find()
      .exec()
      .then(function (tasks) {
        res.json({ tasks: tasks });
      });
  } else {
    res.sendFile(path.join(__dirname, "public", "overview.html"));
  }
});

app.get("/deadlines", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "deadline.html"));
});

app.get("/projects", function (req, res) {
  if (req.query.getProjects) {
    Project.find()
      .exec()
      .then(function (projects) {
        res.json({ projects: projects });
      });
  } else {
    res.sendFile(path.join(__dirname, "public", "projectsList.html"));
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.listen(3000, function () {
  console.log("listening on port 3000..");

  /* Task.insertMany([
    {
      name: "Swe363 Homework3",
      details:
        "Add javascript to already built website from previous homeworks",
      urgent: true,
      type: "toDo",
      deadline: "20/4/2024",
    },
    {
      name: "Swe387 Homework2",
      details:
        "Add evaluation criteria for proposals and start evalauting all groups",
      urgent: false,
      type: "toDo",
      deadline: "27/4/2024",
    },
    {
      name: "Swe363 Inreface Phase",
      details: "Create interface front-end with html javascript and css",
      urgent: true,
      type: "doing",
      deadline: "20/4/2024",
    },
    {
      name: "Swe363 Homework2",
      details: "Add css to already built website with html in hw1",
      urgent: false,
      type: "done",
      deadline: "2/4/2024",
    },
  ]).then(function (tasks) {
    console.log("entered " + tasks.length + " documents");

    User.insertMany([
      {
        firstName: "Tester",
        lastName: "1",
        username: "Tester",
        password: "123",
        email: "tester@test.com",
      },
    ]).then(function (user) {
      console.log("added " + user.length + " user");
      Project.insertMany([
        {
          title: "Project 1",
          members: [user[0]._id],
        },
      ]);
      Progress.insertMany([
        {
          member: user[0]._id,
          task: tasks[0]._id,
        },
        {
          member: user[0]._id,
          task: tasks[2]._id,
        },
      ]);
    });
  }); */
});
