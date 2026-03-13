function showLogin() {

document.getElementById("loginSection").style.display="block";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

window.location.href="topics.html";

}

else{

document.getElementById("error").innerHTML="Invalid Username or Password";

}

}