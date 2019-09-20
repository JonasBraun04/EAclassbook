function checkUsername() {
  var username = document.getElementById("username").value;
  console.log("Username: " + username);
  //var data = getData(); //To Do: Daten übertragung
  //To Do Daten auslesen
  //console.log(data); //To Do einrichten

  if(username == "Hans") { //Daten kontrolle
    console.log("Hans!");
    event.preventDefault();
  } else {
    console.log("nicht Hans");
  }
}

function passwordChecker() {
  var password = document.getElementById("test");
    password.addEventListener("click", function(event) {
    if(password.value == "asdf") {
      event.preventDefault();
    }
  }, true);
}
