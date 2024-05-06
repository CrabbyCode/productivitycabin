var toDoItems = [
  /* {
    id: 0,
    title: "Swe363 Homework3",
    desc: "Add javascript to already built website from previous homeworks",
    subTasksNum: "6",
    deadline: "20/4/2024",
    urgent: true,
  },
  {
    id: 1,
    title: "Swe387 Homework2",
    desc: "Add evaluation criteria for proposals and start evalauting all groups",
    subTasksNum: "3",
    deadline: "27/4/2024",
    urgent: false,
  }, */
];
var doingItems = [
  /* {
    id: 2,
    title: "Swe363 Inreface Phase",
    desc: "Create interface front-end with html javascript and css",
    subTasksNum: "13",
    deadline: "20/4/2024",
    urgent: true,
  }, */
];
var doneItems = [
  /* {
    id: 3,
    title: "Swe363 Homework2",
    desc: "Add css to already built website with html in hw1",
    subTasksNum: "2",
    deadline: "2/4/2024",
    urgent: false,
  }, */
];

////
///////////////////////////////////
////
//Main
window.onload = function (e) {
  fetch("/?getTasks=true")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      result.tasks.forEach(function (task) {
        var entry = {
          title: task.name,
          desc: task.details,
          subTasksNum: "6",
          deadline: task.deadline,
          urgent: task.urgent,
        };
        if (task.type == "toDo") {
          toDoItems.push(entry);
        } else if (task.type == "doing") {
          doingItems.push(entry);
        } else {
          doneItems.push(entry);
        }
      });
      loadTaskCards();
      loadNumTotals();
      dragBehaviorForTaskCards();
    });
};

function createTaskCard(
  title,
  desc,
  subTasksNum,
  deadline,
  urgent,
  typeForClass,
  id
) {
  const elem = document.createElement("div");
  elem.classList.add("taskCardGrid");
  elem.classList.add(typeForClass);
  elem.draggable = true;
  elem.id = id;
  elem.innerHTML = `
 <div class="taskCardGridL1">
   <div id="oneone">
     <p class="taskCardTitle">${title}</p>
   </div>
   <div id="twotwo">
     <img
       src= ${urgent == true ? "./assets/Urgent.png" : "./assets/Normal.png"}
       alt="avatar"
       width="30px"
       height="30px"
       style="background-color: ${urgent == true ? "#c56161" : "none"}"
     />
     <div class="dropdown" style="display: inline">
       <button
         class=""
         type="button"
         data-bs-toggle="dropdown"
         aria-expanded="false"
         style="width: 30px; font-size: 20px; font-weight: bold"
       >
         ⋮
       </button>
       <ul class="dropdown-menu">
         <li>
           <a class="dropdown-item" href="./overviewTaskEdit.html">Edit</a>
         </li>
         <li>
           <a class="dropdown-item" href="#" id="${"d" + id}">Delete</a>
         </li>
       </ul>
     </div>
   </div>
 </div>
 <div class="taskCardGridL2">
   <p style="font-size: 14px; color: #171717">
     ${desc}
   </p>
 </div>

 <div class="taskCardGridL3">
   <div class="taskCardBlack">
     <div>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         fill="#171717"
         class="bi bi-person-workspace"
         viewBox="0 0 16 16"
         style="position: relative; bottom: 2px"
       >
         <path
           d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
         />
         <path
           d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"
         />
       </svg>
       <span style="color: #171717"
         ><span>${subTasksNum}</span> Tasks left</span
       >
     </div>
   </div>

   <div class="taskCardBlack">
     <div>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         fill="#171717"
         class="bi bi-calendar-x-fill"
         viewBox="0 0 16 16"
         style="position: relative; bottom: 2px"
       >
         <path
           d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6.854 8.146 8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708"
         />
       </svg>
       <span style="color: #171717">${deadline}</span>
     </div>
   </div>
 </div>
`;

  return elem;
}

function loadTaskCards() {
  var todo = document.getElementById("toDoColumn");
  var doing = document.getElementById("doingColumn");
  var done = document.getElementById("doneColumn");

  todo.innerHTML = "";
  doing.innerHTML = "";
  done.innerHTML = "";

  toDoItems.forEach((item) => {
    todo.appendChild(
      createTaskCard(
        item.title,
        item.desc,
        item.subTasksNum,
        item.deadline,
        item.urgent,
        "toDoBackGround",
        item.id
      )
    );
    document.getElementById("d" + item.id).addEventListener("click", (e) => {
      toDoItems.splice(
        toDoItems.findIndex((i) => i.id == item.id),
        1
      );
      loadTaskCards();
      loadNumTotals();
    });
  });

  doingItems.forEach((item) => {
    doing.appendChild(
      createTaskCard(
        item.title,
        item.desc,
        item.subTasksNum,
        item.deadline,
        item.urgent,
        "doingBackGround",
        item.id
      )
    );

    document.getElementById("d" + item.id).addEventListener("click", (e) => {
      doingItems.splice(
        doingItems.findIndex((i) => i.id == item.id),
        1
      );
      loadTaskCards();
      loadNumTotals();
    });
  });

  doneItems.forEach((item) => {
    done.appendChild(
      createTaskCard(
        item.title,
        item.desc,
        item.subTasksNum,
        item.deadline,
        item.urgent,
        "doneBackGround",
        item.id
      )
    );

    document.getElementById("d" + item.id).addEventListener("click", (e) => {
      doneItems.splice(
        doneItems.findIndex((i) => i.id == item.id),
        1
      );
      loadTaskCards();
      loadNumTotals();
    });
  });
}

function loadNumTotals() {
  let todo = toDoItems.length;
  let doing = doingItems.length;
  let done = doneItems.length;

  document.getElementById("toDoNumTotal").innerText = todo;
  document.getElementById("doingNumTotal").innerText = doing;
  document.getElementById("doneNumTotal").innerText = done;
}

function dragBehaviorForTaskCards() {
  var todo = document.getElementById("toDoColumn");
  var doing = document.getElementById("doingColumn");
  var done = document.getElementById("doneColumn");

  ////removing defualt behavior
  todo.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  doing.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  done.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  /////setting data for drag
  todo.addEventListener("dragstart", (e) => {
    let j = JSON.stringify({ id: e.target.id, type: "todo" });
    e.dataTransfer.setData("Text", j);
  });

  doing.addEventListener("dragstart", (e) => {
    let j = JSON.stringify({ id: e.target.id, type: "doing" });
    e.dataTransfer.setData("Text", j);
  });

  done.addEventListener("dragstart", (e) => {
    let j = JSON.stringify({ id: e.target.id, type: "done" });
    e.dataTransfer.setData("Text", j);
  });

  ////drop data dealing
  todo.addEventListener("drop", (e) => {
    let item = JSON.parse(e.dataTransfer.getData("Text"));
    if (item["type"] === "doing") {
      let deleted = doingItems.splice(
        doingItems.findIndex((i) => i.id == item["id"]),
        1
      );
      toDoItems.push(deleted[0]);
    } else if (item["type"] === "done") {
      let deleted = doneItems.splice(
        doneItems.findIndex((i) => i.id == item["id"]),
        1
      );
      toDoItems.push(deleted[0]);
    }
    loadNumTotals();
    loadTaskCards();
  });

  doing.addEventListener("drop", (e) => {
    let item = JSON.parse(e.dataTransfer.getData("Text"));
    if (item["type"] === "todo") {
      let deleted = toDoItems.splice(
        toDoItems.findIndex((i) => i.id == item["id"]),
        1
      );
      doingItems.push(deleted[0]);
    } else if (item["type"] === "done") {
      let deleted = doneItems.splice(
        doneItems.findIndex((i) => i.id == item["id"]),
        1
      );
      doingItems.push(deleted[0]);
    }
    loadNumTotals();
    loadTaskCards();
  });

  done.addEventListener("drop", (e) => {
    let item = JSON.parse(e.dataTransfer.getData("Text"));
    if (item["type"] === "todo") {
      let deleted = toDoItems.splice(
        toDoItems.findIndex((i) => i.id == item["id"]),
        1
      );
      doneItems.push(deleted[0]);
    } else if (item["type"] === "doing") {
      let deleted = doingItems.splice(
        doingItems.findIndex((i) => i.id == item["id"]),
        1
      );
      doneItems.push(deleted[0]);
    }
    loadNumTotals();
    loadTaskCards();
  });
}
