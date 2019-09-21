function load() {
  window.alert("test");
}

function checkRandom() {
  var selectedRandom = document.getElementById("select").value;
  if(selectedRandom == "schueler") {
    console.log("Schüler-Modus");
  } else if(selectedRandom == "numbers") {
    console.log("Nummer-Modus");
    setNumbers();
  } else if(selectedRandom == "letters") {
    console.log("Alphabet-Modus");
  } else {
    console.log("Undefinierte Eingabe!");
  }
}

function setNumbers() {
  var randomDiv = document.getElementById("random");
  //To Do Auswahlfelder adden
}
