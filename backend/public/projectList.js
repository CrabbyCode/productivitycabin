var projects = [];

window.onload = function (e) {
  fetch();
};

function createProjectCard(id, title, todo, doing, done) {
  const elem = document.createElement("div");
  elem.id = id;
  elem.innerHTML = ``;
}
