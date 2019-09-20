function Test() {
  window.alert("test");
}

function checkUsername(data) {
  var usernameInput = document.getElementById("username");
  var username = usernameInput.value;
  console.log(data);
  console.log(username);

  for(i = 0; i < data.length; i++) {
    if(data.username == username) {
      usernameInput.style="color: red; border: solid #cc334c;";
      usernameInput.title="Benutzername ist bereits vergeben";
      return(false);
      break;
    } else {
      usernameInput.style="color: black; border: auto;";
      usernameInput.title="Benutzername ist gütlig";
      return(true);
    }
  }
}

function checkEmail(data) {
  var emailInput = document.getElementById("email");
  var email2Input = document.getElementById("email2");
  var email = document.getElementById("email").value;
  var email2 = document.getElementById("email2").value;
  console.log(data);
  console.log(email);
  console.log(email2);

  if(email != email2) {
    emailInput.style="color: red; border: solid #cc334c;";
    emailInput.title="Emails stimmen nicht überein. Bitte überprüfen!";
    email2Input.style="color: red; border: solid #cc334c;";
    email2Input.title="Emails stimmen nicht überein. Bitte überprüfen!";
    return(false);
  } else {
    for(i = 0; i < data.length; i++) {
      if(data.email == email) {
        emailInput.style="color: red; border: solid #cc334c;";
        emailInput.title="Email ist bereits verwendet";
        email2Input.style="color: red; border: solid #cc334c;";
        email2Input.title="Email ist bereits verwendet";
        return(false);
        break;
      } else {
        emailInput.style="color: black; border: auto;";
        emailInput.title="E-Mail Adresse eintragen";
        email2Input.style="color: black; border: auto;";
        email2Input.title="E-Mail Adresse wiederholen";
        return(true);
      }
    }
  }
}

function checkPassword() {
  passwordInput = document.getElementById("password");
  password2Input = document.getElementById("password2");
  password = passwordInput.value;
  password2 = password2Input.value;
  console.log(password);
  console.log(password2);

  if(password != password2) {
    passwordInput.style="color: red; border: solid #cc334c;";
    passwordInput.title="Passwörter stimmen nicht überein. Bitte überprüfen!";
    password2Input.style="color: red; border: solid #cc334c;";
    password2Input.title="Passwörter stimmen nicht überein. Bitte überprüfen!";
    return(false);
  } else {
    passwordInput.style="color: black; border: auto;";
    passwordInput.title="Passwort eingeben";
    password2Input.style="color: black; border: auto;";
    password2Input.title="Passwort wiederholen";
    return(true);
  }
}
function submitCheck() {
  document.getElementById("form").addEventListener("click", function(event) {
    console.log("test");
    event.preventDefault();
  }, false);
  /*document.getElementById("form").onsubmit = function() {
  document.getElementById("form").addEventListener('submit', function (evt) {
    var data = getData();
    var usernameCheck = checkUsername(data);
    var emailCheck = checkEmail(data);
    var passwordCheck = checkPassword();
    console.log("Username: " + usernameCheck);
    console.log("Email: " + emailCheck);
    console.log("Password: " + passwordCheck);
    window.alert("hallo");
    if(!passwordCheck) {
      return true;
    } else {
      return false;
    }
    if(usernameCheck != true || emailCheck != true ||  passwordCheck!= true) {
      console.log("canceled");
      evt.preventDefault();
    }
  });
}*/
}
/*
          To Do:
  Doppelte überprüfen als Funktion auslagern
*/
