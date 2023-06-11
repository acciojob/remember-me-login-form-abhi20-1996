//your JS code here. If required.
let nameIn=document.getElementById("username").value;
let passIn=document.getElementById("password").value;
let submit=document.getElementById("submit");
let check=document.getElementById("checkbox").checked;
let btn=document.getElementById("existing");
submit.addEventListener('click',(e)=>{
	e.preventDefault();
	if (check) {
		localStorage.setItem("username", JASON.stringify(nameIn));
		localStorage.setItem("password", JASON.stringify(passIn));
		btn.style.display="block";
	}
	alert(`Logged in as ${nameIn}`);
	
});
btn.addEventListener('click',()=>{
	if (check) {
		alert("Logged in as "+ localStorage.username);
	}
})
