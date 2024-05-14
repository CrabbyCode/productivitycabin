const express = require("express");
const Task = require("./models/task");
const app = express();
const path = require("path");
const User = require("./models/user");
const Project = require("./models/project");
const Progress = require("./models/progress");
const cookieParser = require("cookie-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  if (req.path == "/") {
    next();
  } else if (req.path == "/signup") {
    next();
  } else if (req.path == "/auth") {
    next();
  } else {
    if (req.cookies.userId) {
      next();
    } else {
      res.send("you suck");
    }
  }
});

app.get("/overview", function (req, res) {
  if (req.query.getTasks) {
    Task.find({ project: req.query.project })
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
        var toSendBack = [];
        projects.forEach((element) => {
          var todCount = 0;
          var doingCount = 0;
          var doneCount = 0;
          Task.find({ project: element._id })
            .exec()
            .then(function (tasks) {
              if (tasks.length > 0) {
                tasks.forEach(function (task) {
                  if (task.type == "toDo") {
                    todCount += 1;
                  } else if (task.type == "doing") {
                    doingCount += 1;
                  } else {
                    doneCount += 1;
                  }
                });
              }
              toSendBack.push({
                project: element,
                counts: [todCount, doingCount, doneCount],
              });
              if (projects[projects.length - 1]._id == element._id) {
                res.json(toSendBack);
              }
            });
        });
      });
  } else {
    res.sendFile(path.join(__dirname, "public", "projectsList.html"));
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});
app.post("/signup", function (req, res) {
  const { firstname, lastname, usernamesignup, emailsignup, passwordsignup } =
    req.body;
  // bike.save()
  //     .then(data => {
  //         console.log("IT WORKED!")
  //         console.log(data);
  //     })
  //     .catch(err => {
  //         console.log("OH NO ERROR!")
  //         console.log(err)
  //     })

  User.insertMany([
    {
      firstName: firstname,
      lastName: lastname,
      username: usernamesignup,
      password: passwordsignup,
      email: emailsignup,
    },
  ]).then(function (user) {
    console.log("added " + user.length + " user");
    res.redirect("/");
  });
});

// app.post("/auth", function (req, res) {
//   const {usernamelogin, passwordlogin} = req.body;

//   Project.find().exec().then(function(resp){
//     res.json({projects: resp})
//   })
// });
// --------------------------trial function ?

app.post("/auth", async function (req, res) {
  const { usernamelogin, passwordlogin } = req.body;

  // Check if the user exists in the database
  try {
    const user = await User.findOne({ username: usernamelogin });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordValid = passwordlogin == user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: `Invalid password` });
    }

    res.cookie("userId", user._id);
    res.status(200).json({ userId: user._id });
    // res.redirect("/overview")
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/productivity", function (req, res) {
  if (req.query.projectId) {
    Progress.find({ project: req.query.projectId })
      .populate("member")
      .populate("task")
      .exec()
      .then(function (result) {
        res.json(result);
      });
  } else res.sendFile(path.join(__dirname, "public", "productivityLog.html"));
});

app.get("/settings", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "settings.html"));
});

app.get("/signout", function (req, res) {
  res.clearCookie("userId");
  res.redirect("/");
});

app.use("/deadlines", require("./routers/deadline_router"));
app.use("/overview", require("./routers/overview_router"));
app.use("/progress", require("./routers/progress_router"));
app.use("/projects", require("./routers/project_router"));

app.listen(3000, function () {
  console.log("listening on port 3000..");

  /* User.insertMany([
    {
      firstName: "Tester",
      lastName: "1",
      username: "Talal",
      password: "123",
      email: "tester@test.com",
    },
    {
      firstName: "Tester2",
      lastName: "1",
      username: "Mohammad",
      password: "123",
      email: "tester2@test.com",
    }
  ]).then(function (user) {
    console.log("added " + user.length + " user");
    Project.insertMany([
      {
        title: "Project 1",
        members: [user[0]._id, user[1]._id],
      },
      {
        title: "Project 2",
        members: [user[0]._id],
      },
    ]).then(function (project) {
      Task.insertMany([
        {
          name: "Swe363 Homework3",
          details:
            "Add javascript to already built website from previous homeworks",
          urgent: true,
          type: "toDo",
          deadline: new Date(),
          project: project[0]._id,
        },
        {
          name: "Swe387 Homework2",
          details:
            "Add evaluation criteria for proposals and start evalauting all groups",
          urgent: false,
          type: "toDo",
          deadline: new Date(),
          project: project[0]._id,
        },
        {
          name: "Swe363 Inreface Phase",
          details: "Create interface front-end with html javascript and css",
          urgent: true,
          type: "doing",
          deadline: new Date(),
          project: project[0]._id,
        },
        {
          name: "Swe363 Homework2",
          details: "Add css to already built website with html in hw1",
          urgent: false,
          type: "done",
          deadline: new Date(),
          project: project[0]._id,
        },
      ]).then(function (tasks) {
        console.log("entered " + tasks.length + " documents");
        Progress.insertMany([
          {
            member: user[0]._id,
            task: tasks[3]._id,
            project: project[0]._id,
          },
          
        ]);
      });
    });
  }); */
});

module.exports = app;
