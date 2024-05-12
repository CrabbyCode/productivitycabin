var projects = [];

window.onload = function (e) {
  fetch("/projects?getProjects=true")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
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
    console.log(localStorage.getItem("chosenProject"));
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
