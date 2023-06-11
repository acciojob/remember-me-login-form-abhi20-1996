document.getElementById("submit").addEventListener('click', function(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let check = document.getElementById("checkbox").checked;

  if (check) {
    localStorage.setItem("username1", JSON.stringify(username));
    localStorage.setItem("password1", JSON.stringify(pass));
    document.getElementById("existing").style.display = "block";
  } else {
    localStorage.removeItem("username1");
    localStorage.removeItem("password1");
  }
  alert(`Logged in as ${username}`);
});

document.getElementById("existing").addEventListener('click', function() {
  let Name = JSON.parse(localStorage.getItem("username1"));
  alert(`Logged in as ${Name}`);
});
if (localStorage.getItem("username1") && localStorage.getItem("password1")) {
  document.getElementById("existing").style.display = "block";
}
