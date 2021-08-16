let time = prompt("Enter Time in Seconds", "Please type numbers only");
let rotateDay = 0;
let rotateHour = 0;
let rotateMin = 0;
let rotateSec = 0;

let interval = setInterval(updateCountdown, 1000);

const countDay = document.getElementById("dataDay");
const topDay = document.getElementById("topCardDay");
const countHour = document.getElementById("dataHour");
const topHour = document.getElementById("topCardHour");
const countMin = document.getElementById("dataMin");
const topMin = document.getElementById("topCardMin");
const countSec = document.getElementById("dataSec");
const topSec = document.getElementById("topCardSec");

// const btn = document.getElementById("btn");
rotateSec = rotateSec + 360;
topSec.style.transform = `rotateX(${rotateSec}deg)`;
rotateMin = rotateMin + 360;
topMin.style.transform = `rotateX(${rotateMin}deg)`;
rotateHour = rotateHour + 360;
topHour.style.transform = `rotateX(${rotateHour}deg)`;
rotateDay = rotateDay + 360;
topDay.style.transform = `rotateX(${rotateDay}deg)`;

function updateCountdown() {
  var dayDisplay = Math.floor(time / 60 / 60 / 24);
  var hourDisplay = Math.floor((time / 60 / 60) % 24);
  var minDisplay = Math.floor((time / 60) % 60);
  var secDisplay = Math.floor(time % 60);

  countDay.innerHTML = `${dayDisplay}`;
  countHour.innerHTML = `${hourDisplay}`;
  countMin.innerHTML = `${minDisplay}`;
  countSec.innerHTML = `${secDisplay}`;

  rotateSec = rotateSec + 360;
  topSec.style.transform = `rotateX(${rotateSec}deg)`;

  if ((time + 1) % 60 == 0) {
    rotateMin = rotateMin + 360;
    topMin.style.transform = `rotateX(${rotateMin}deg)`;
  }

  if (((time + 1) / 60) % 60 == 0) {
    rotateHour = rotateHour + 360;
    topHour.style.transform = `rotateX(${rotateHour}deg)`;
  }

  if (((time + 1) / 60 / 60) % 24 == 0) {
    rotateDay = rotateDay + 360;
    topDay.style.transform = `rotateX(${rotateDay}deg)`;
  }

  time--;
  time = time < 0 ? clearInterval(interval) : time;
}
