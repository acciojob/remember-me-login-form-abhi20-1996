//your JS code here. If required.
let username = document.getElementById("username").value;
let pass = document.getElementById("password").value;
let check = document.getElementById("checkbox");
let form = document.getElementById("form");
document.getElementById("submit").addEventListener('click',myFunc);
document.getElementById("existing").addEventListener('click',exisFunc);
if(localStorage.getItem("username") && localStorage.getItem("password")){
	// document.getElementById("form").style.display = "none";
	document.getElementById("existing").style.display = "block";
}

function exisFunc(){
	let name = JSON.parse(localStorage.getItem("username"));
	alert(`Logged in as ${name}`);
}

function myFunc(e){
	e.preventDefault();
	if(check){
		localStorage.setItem("username",JSON.stringify(username));
		localStorage.setItem("password",JSON.stringify(pass));
		document.getElementById("existing").style.display = "block";
		
	}else{
		alert(`Logged in as ${username}`);
		document.getElementById("existing").style.display = "none";
	}
	
}