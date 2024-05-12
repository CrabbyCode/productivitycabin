window.onload = function (e) {
  const taskId = localStorage.getItem("taskToEdit");
  if (taskId) {
    fetch(`/overview/task/edit/${taskId}`)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (task) {
        document.getElementById("taskName").value = task.name;
        document.getElementById("description").value = task.details;
        if (task.urgent) {
          document.getElementById("urgent").setAttribute("checked", "true");
        }
        document.getElementById("dob").valueAsDate = new Date(task.deadline);
      });
  }

  document.getElementById("saving").addEventListener("click", function (e) {
    const taskId = localStorage.getItem("taskToEdit");
    var formEl = document.forms.taskEditForm;
    var formData = new FormData(formEl);

    if (taskId) {
      var data = {
        name: formData.get("taskName"),
        details: formData.get("description"),
        urgent: formData.get("urgent"),
        deadline: formData.get("userdob"),
      };
      fetch(`/overview/task/edit/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(function (e) {
        location.href = "/overview";
      });
    } else {
      var data = {
        name: formData.get("taskName"),
        details: formData.get("description"),
        urgent: formData.get("urgent"),
        deadline: formData.get("userdob"),
        project: localStorage.getItem("chosenProject"),
        type: localStorage.getItem("type"),
      };
      fetch(`/overview/task/edit/${taskId}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(function (e) {
        location.href = "/overview";
      });
    }
  });
};

window.onbeforeunload = function (e) {
  localStorage.removeItem("taskToEdit");
};
