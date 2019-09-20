<?php

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];

$conn = mysqli_connect("localhost", "", "", ""); //To do Datenbankzugriff einrichten
$sql = "INSERT INTO ``(``, ``, ``) VALUES ('$username', '$email', '$password')"; //To do Datenupload einrichten

mysqli_query($conn, $sql);

echo header("Location: Anmeldung.html");
?>
