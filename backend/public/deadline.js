/*

const tasks = [
    
    {
      title: "SWE 363 Homework3",
      image: "assets/logo_large.png",
      details: "Add javascript to already built website from previous homeworks",
      deadline: "20/4/2024" ,
      link: "overview.html"
    },
    // ... other tasks
    {
        title: "SWE 387 Homework2",
        image: "assets/logo_large.png",
        details: "Add evaluation criteria for proposlas and start evalautin all groups",
        deadline: "27/4/2024",
        link: "overview.html"
      },
      {
        title: "SWE 363 interface Phase",
        image: "assets/logo_large.png",
        details: "create interface front-endwith html css and js",
        deadline: "20/4/2024",
        link: "overview.html"
      },
      {
        title: "SWE 363 Homework2",
        image: "assets/logo_large.png",
        details: "Add css to already built website with html in Hw1",
        deadline: "2/4/2024"
        , link: "overview.html"
      },
      {
        title: "SWE 363 Homework2",
        image: "assets/logo_large.png",
        details: "Add css to already built website with html in Hw1",
        deadline: "2/4/2024"
        , link: "overview.html"
      },
      {
        title: "SWE 363 Homework2",
        image: "assets/logo_large.png",
        details: "Add css to already built website with html in Hw1",
        deadline: "2/4/2024"
        , link: "overview.html"
      },

  ];

  const tasksHeading = document.querySelector(".tasks-list-container h2");
  const tasksContainer = document.querySelector(".tasks-list-container .tasks");

  if (tasks.length==1) {
    tasksHeading.innerHTML = `${tasks.length} Task`;
  } else {
    tasksHeading.innerHTML = `${tasks.length} Tasks`;
  }

  const createTaskListContainer = () =>{
    tasks.forEach((task )=>{
        let taskCard = document.createElement("div");
        taskCard.classList.add("task");

        let image = document.createElement("img");
        image.src = task.image;

        let title = document.createElement("h3");
        title.innerHTML = task.title;
        title.classList.add("task-tittle");

        let details = document.createElement("div");
        details.innerHTML = task.details;
        details.classList.add("details");

        let detailsBtn = document.createElement("a");
        detailsBtn.href = task.link;
        details.innerHTML = "More details";
        detailsBtn.classList.add("details-btn");

        let deadline = document.createElement("span");
        deadline.classList.add("deadline-task");
        deadline.innerHTML = `${tasks.deadline}`;

        taskCard.appendChild(image);
        taskCard.appendChild(title);
        taskCard.appendChild(details);
        taskCard.appendChild(detailsBtn);
        taskCard.appendChild(deadline);

        tasksContainer.appendChild(taskCard);


    });
  }

  createTaskListContainer();


*/

/*
document.addEventListener('DOMContentLoaded', function () {
    const tasks = [
        {
            title: "SWE 363 Homework3",
            image: "assets/logo_large.png",
            details: "Add javascript to already built website from previous homeworks",
            deadline: "20/4/2024",
            link: "overview.html"
        },
        {
            title: "SWE 387 Homework2",
            image: "assets/logo_large.png",
            details: "Add evaluation criteria for proposals and start evaluating all groups",
            deadline: "27/4/2024",
            link: "overview.html"
        },
        {
            title: "SWE 363 Interface Phase",
            image: "assets/logo_large.png",
            details: "Create interface front-end with html css and js",
            deadline: "20/4/2024",
            link: "overview.html"
        },
        {
            title: "SWE 363 Homework2",
            image: "assets/logo_large.png",
            details: "Add css to already built website with html in HW1",
            deadline: "2/4/2024",
            link: "overview.html"
        },
        // Repeat the last task for demonstration
        {
            title: "SWE 363 Homework2",
            image: "assets/logo_large.png",
            details: "Add css to already built website with html in HW1",
            deadline: "2/4/2024",
            link: "overview.html"
        },
        {
            title: "SWE 387 Homework2",
            image: "assets/logo_large.png",
            details: "Add evaluation criteria for proposals and start evaluating all groups",
            deadline: "27/4/2024",
            link: "overview.html"
        },
        
    ];
    const tasksHeading = document.querySelector(".tasks-list-container h2");

    tasksHeading.innerHTML = `${tasks.length} Tasks`;
    const tasksContainer = document.querySelector(".tasks-list-container .tasks");

    tasks.forEach(task => {
        let taskCard = document.createElement("div");
        taskCard.className = "task";

        taskCard.innerHTML = `
            <img src="${task.image}" alt="Task image">
            <h3 class="task-title">${task.title}</h3>
            <div class="details">${task.details}</div>
            <a href="${task.link}" class="details-btn">More details</a>
            <span class="deadline-task">${task.deadline}</span>
        `;

        tasksContainer.appendChild(taskCard);
    });
});
*/
//modfied
document.addEventListener("DOMContentLoaded", function () {
  // Fetch tasks dynamically from the server
  const projectId = localStorage.getItem("chosenProject");
  fetch(`/deadlines/${projectId}`)
    .then((response) => response.json())
    .then((tasks) => {
      const tasksHeading = document.querySelector(".tasks-list-container h2");
      tasksHeading.innerHTML = `${tasks.length} Tasks`;

      const tasksContainer = document.querySelector(
        ".tasks-list-container .tasks"
      );
      tasksContainer.innerHTML = ""; // Clear previous task cards if any

      tasks.forEach((task) => {
        let taskCard = document.createElement("div");
        taskCard.className = "task";
        taskCard.innerHTML = `
        <p class="deadline-task">${new Date(task.deadline).toLocaleDateString(
          "en-US"
        )}</p>
                  <h3 class="task-title">${task.name}</h3>
                  <div class="details">${task.details}</div>
                  <a href="/overview" class="details-btn">More details</a>
                  
              `;

        tasksContainer.appendChild(taskCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
      const tasksHeading = document.querySelector(".tasks-list-container h2");
      tasksHeading.innerHTML = "Error loading tasks";
    });
});

//Search bar left
/* tasks.forEach(addTaskToDOM); */

// Function to search tasks
function searchTasks() {
  const searchText = searchInput.value.toLowerCase();
  const taskCards = document.querySelectorAll(".task");

  taskCards.forEach((card) => {
    const title = card.querySelector(".task-title").textContent.toLowerCase();
    const details = card.querySelector(".details").textContent.toLowerCase();
    if (title.includes(searchText) || details.includes(searchText)) {
      card.style.display = ""; // Show the task card
    } else {
      card.style.display = "none"; // Hide the task card
    }
  });
}
