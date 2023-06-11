document.getElementById("submit").addEventListener('click', function(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let check = document.getElementById("checkbox").checked;

  if (check) {
    localStorage.setItem("name", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(pass));
    document.getElementById("existing").style.display = "block";
  } else {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
  }
  alert(`Logged in as ${username}`);
});

document.getElementById("existing").addEventListener('click', function() {
  let Name = JSON.parse(localStorage.getItem("name"));
  alert(`Logged in as ${Name}`);
});

if (localStorage.getItem("name") && localStorage.getItem("password")) {
  document.getElementById("existing").style.display = "block";
}