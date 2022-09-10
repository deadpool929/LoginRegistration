function AvoidSpace(event) {
  var k = event ? event.which : window.event.keyCode;
  if (k == 32) return false;
}

var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
    return true;
  }
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
    alert("login failed😢");
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
      
      alert("Password do not match🙂");
      
    } else {
      window.location = "Registeredtrue.html";
      alert("Registration Passed😎");
      
    }
  } else {
   
    alert("Registration failed😢");
  }
}
