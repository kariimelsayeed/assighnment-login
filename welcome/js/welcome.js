let welcomeMsg = document.getElementById("welcomeMsg");

window.addEventListener("load", function () {
  displayUserName();
});

function displayUserName() {
  if (localStorage.getItem("userName") !== null) {
    welcomeMsg.innerHTML = `welcome ${localStorage.getItem("userName")}`;
  } else {
    welcomeMsg.innerHTML = "";
  }
}
