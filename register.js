  var reg = document.getElementById("registrationForm");

  reg && reg.addEventListener("submit",(event) =>{
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var userData = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    email: email,
    username: username,
    password: password,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "dashboard.html";
});

// login form

var btnLogin = document.getElementById("loginForm")

btnLogin && btnLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  var savedUser = JSON.parse(localStorage.getItem("userData"));
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (
    savedUser &&
    savedUser.username === username &&
    savedUser.password === password
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});


window.addEventListener("load", () => {
  console.log('kjjjjjkkkj',window.location.pathname)
  if (window.location.pathname.indexOf("dashboard.html") > -1) {
    //map data from LS

    var local = JSON.parse(localStorage.getItem("userData"));

    if (local) {
      console.log({local});
      var userDataBody = document.getElementById("userDataBody");

      userDataBody.innerHTML = `
      <td>${local.firstName}</td>
      <td>${local.lastName}</td>
      <td>${local.dateOfBirth}</td>
      <td>${local.email}</td>
      <td>${local.username}</td>
      <td>${local.password}</td>

      `;
    }
  }
});