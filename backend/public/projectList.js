var projects = [
  {
    id: 67,
    title: "Prj1",
    todo: 6,
    doing: 78,
    done: 55,
  },
];

window.onload = function (e) {
  fetch("/projects?getProjects=true")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      response.projects.forEach(function (projectData) {
        projects.push({
          id: projectData._id,
          title: projectData.title,
          todo: 77,
          doing: 89,
          done: 77,
        });
      });
      loadProjectsHtml();
    });
};

function createProjectCard(id, title, todo, doing, done) {
  const elem = document.createElement("div");
  elem.id = id;
  elem.innerHTML = ` <a id="returnBtnAnchor" href="/overview">
  <div id="projectCard">
    <img src="assets/logo_large.png" alt="Project picture">
    
    <div>
      <h2>${title}</h2>
      <span id="todoStat">To-do: ${todo}</span>
      <span id="doingStat">Doing: ${doing}</span>
      <span id="doneStat">Done: ${done}</span>
    </div>
  </div>
</a>
  <br>`;
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
modal = document.querySelector("#modal")
addProject = document.querySelector("#addProject")
addM = document.querySelector("#addM")
member = document.querySelector("#member")
readonlyTextbox = document.querySelector("#readonlyTextbox")
addProject.addEventListener('click', () => {
  modal.showModal();
})
addM.addEventListener('click', () => {
  readonlyTextbox.value= `${readonlyTextbox.value} ${member.value}, `;
  member.value="";
})