
let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccessAlert = document.getElementById("loginSuccessAlert");

let allUsers = [];


if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  login();
 
});

function login() {
  let userData = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  console.log(userData);

  if (isLoginValid(userData) == true) {
    console.log("you are logged in");
    loginSuccessAlert.classList.replace("d-none", "d-block");
    loginAlert.classList.replace("d-block", "d-none");
    setTimeout(function () {
      window.location.href = "../welcome/welcome.html";
    }, 2000);
  } else {
    console.log("user not found, please sign up!!!");
    loginAlert.classList.replace("d-none", "d-block");
    loginSuccessAlert.classList.replace("d-block", "d-none");
  }
}

function isLoginValid(userData) {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUsers[i].password.toLowerCase() == userData.password.toLowerCase()
    ) {
      console.log("user found");
      localStorage.setItem("userName", allUsers[i].name);
      return true;
    }
  }
}
