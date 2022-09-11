function AvoidSpace(event) {
  var k = event ? event.which : window.event.keyCode;
  if (k == 32) return false;
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction1() {
  var x = document.getElementById("confirm_password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function loginValidate() {
  let emailFormat1 =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let passwordFormat1 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let email1 = String(document.getElementById("email").value);
  let password1 = String(document.getElementById("password").value);
  if (emailFormat1.test(email1) && passwordFormat1.test(password1)) {
    window.location = "Logintrue.html";
    alert("login passed😎");
  } else {
    alert(
      "login failed😢. You have entered either wrong email or wrong password Please Login again with correct email and password."
    );
    window.location = "index.html";
  }
}

function registerValidate() {
  let emailFormat2 =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let passwordFormat2 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let email2 = String(document.getElementById("email").value);
  let password2 = String(document.getElementById("password").value);
  let confirmpassword2 = String(
    document.getElementById("confirm_password").value
  );
  if (emailFormat2.test(email2) && passwordFormat2.test(password2)) {
    if (password2 != confirmpassword2) {
      //window.location = "/Register.html";
      alert("Password are not same🙂. Please refill the form.");
    } else {
      window.location = "Registeredtrue.html";
      alert("Registration Passed😎");
    }
  } else {
    alert(
      "Registration failed😢. You have entered either wrong email or your passwords are not same Please Register again with correct email and password."
    );
  }
}
