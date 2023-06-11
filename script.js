//your JS code here. If required.
let username = document.getElementById("username").value;
let pass = document.getElementById("password").value;
let check = document.getElementById("checkbox").checked;


function exisFunc(){
	let Name = JSON.parse(localStorage.getItem("name"));
	alert(`Logged in as ${Name}`);
}

function myFunc(e){
	e.preventDefault();
	if(check){
		localStorage.setItem("name",JSON.stringify(username));
		localStorage.setItem("password",JSON.stringify(pass));
		document.getElementById("existing").style.display = "block";
		
	}
		alert(`Logged in as ${username}`);
}

document.getElementById("submit").addEventListener('click',myFunc);
document.getElementById("existing").addEventListener('click',exisFunc);
if(localStorage.getItem("username") && localStorage.getItem("password")){
	document.getElementById("existing").style.display = "block";
}




