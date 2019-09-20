var currentdate;
var startTime;
var pausedTime = 0;
var stopWatchRunning = false;

function registerClock() {
  setInterval(updateClock, 1);
}

function updateClock() {
  setTime();
  setStopWatch();
}

function setTime() {
  currentdate = new Date;
}

function start() {
  stopWatchRunning = true;
  startTime = currentdate;
}

function stop() {
  stopWatchRunning = false;
  pausedTime = currentdate - startTime + pausedTime;
}

function runde() {

}

function reset() {
  pausedTime = 0;
  stopWatchRunning = 0;
}

function setStopWatch() {
  if(stopWatchRunning == false) {
    return;
  } else {
    var pastTime = currentdate - startTime + pausedTime;
    var stopedTime =  new Date(pastTime);
    var minutes = stopedTime.getMinutes();
    var seconds = stopedTime.getSeconds();
    var milliseconds = stopedTime.getMilliseconds();
    var display = minutes + ":" + seconds + ":" + milliseconds
    document.getElementById("display").innerHTML = display;
  }
}
