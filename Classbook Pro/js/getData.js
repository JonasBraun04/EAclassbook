function getData() {
  var ajax = new XMLHttpRequest();
  var method ="GET";
  var url ="../download.php";
  var asynchronous = true;

  ajax.open(method, url, asynchronous);
  ajax.send();

  ajax.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      return(data);
    }
  }
}
