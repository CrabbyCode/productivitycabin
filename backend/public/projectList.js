var projects = [];

window.onload = function (e) {
  fetch("/projects?getProjects=true", {
    headers: {
      userId: localStorage.getItem("userId"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      response.forEach(function (projectData) {
        projects.push({
          id: projectData.project._id,
          title: projectData.project.title,
          todo: projectData.counts[0],
          doing: projectData.counts[1],
          done: projectData.counts[2],
        });
      });
      loadProjectsHtml();
    });
};

function createProjectCard(id, title, todo, doing, done) {
  const elem = document.createElement("div");
  elem.id = id;
  elem.innerHTML = ` <div id="returnBtnAnchor" href="/overview">
  <div id="projectCard">
    <img src="assets/logo_large.png" alt="Project picture">
    
    <div>
      <h2>${title}</h2>
      <span id="todoStat">To-do: ${todo}</span>
      <span id="doingStat">Doing: ${doing}</span>
      <span id="doneStat">Done: ${done}</span>
    </div>
  </div>
</div>
  <br>`;
  elem.addEventListener("click", function (e) {
    localStorage.setItem("chosenProject", id);

    location.href = "/overview";
  });
  return elem;
}

function loadProjectsHtml() {
  const mainBody = document.getElementById("mainBody");
  projects.forEach(function (project) {
    mainBody.appendChild(
      createProjectCard(
        project.id,
        project.title,
        project.todo,
        project.doing,
        project.done
      )
    );
  });
}
membersToAdd = [localStorage.getItem("userId")];
modal = document.querySelector("#modal");
addProject = document.querySelector("#addProject");
addM = document.querySelector("#addM");
member = document.querySelector("#member");
readonlyTextbox = document.querySelector("#readonlyTextbox");
addProject.addEventListener("click", () => {
  modal.showModal();
});
addM.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`/projects/checkUser?username=${member.value}`).then(async function (
    response
  ) {
    if (response.ok) {
      readonlyTextbox.value = `${readonlyTextbox.value} ${member.value}, `;
      memberId = await response.json();
      membersToAdd.push(memberId.userId);
      member.value = "";
      console.log(membersToAdd);
    } else {
      window.alert("Username does not exist!");
    }
  });
});

document.getElementById("formId").addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("/projects/addNew", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("pName").value,
      members: membersToAdd,
    }),
  }).then(function (res) {
    window.location.href = "/projects";
  });
});

document.getElementById();
