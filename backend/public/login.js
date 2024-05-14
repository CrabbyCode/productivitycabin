console.log("script reached");
document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log("event reached");
    const username = document.getElementById("username-login").value;
    const password = document.getElementById("password-login").value;

    const response = await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernamelogin: username,
        passwordlogin: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Authentication successful
      localStorage.setItem("userId", data.userId); // Store the user ID in local storage
      window.location.href = "/projects"; // Redirect to overview page
    } else {
      alert(data.message); // Display error message
    }
  });
